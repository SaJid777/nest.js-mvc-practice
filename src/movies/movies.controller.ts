import { Body, Controller, Get, Post, Render, Res, Param } from "@nestjs/common";
import { MoviesService } from "./movies.service";


@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService : MoviesService){} 

    @Post('addMovie')
    async addMovie(@Body() body:any, @Res() res:any) {
        let insertMovie = await this.moviesService.addMovie(body);
        return res.redirect('/movies'); 

    }

    @Get('addMovie')
    @Render('addMovie')
    async addMovieForm() {
        return {  };
    }
    
    @Get('/')
    @Render('allMovie')
    async allMovie() {
        let movieList = await this.moviesService.allMovie();
        return { movies: movieList };
    }

    @Get('/categories')
    @Render('categories')
    async categories() {
        return { categories: [{name:"Drama"}, {name:"Action"}, {name:"Horror"}] };
    }

    @Get('categories/:category')
    @Render('categoryMovie') 
    async categoryMovie(@Param('category') category:any) {
        let movies = await this.moviesService.categoryMovie(category);
        return { movies: movies };
    }

    @Get('edit/:movieId')
    @Render('editMovie')
    async editMovie(@Param('movieId') movieId:any) {
        let movie = await this.moviesService.findOne(movieId);
        return { movie: movie };
    }

    @Post('updateMovie')
    async updateMovie(@Body() body:any, @Res() res:any) {
        let movie = await this.moviesService.updateMovie(body);
        return res.redirect('/movies');

    }

    @Get('delete/:movieId')
    async deleteMovie(@Param('movieId') movieId:any, @Res() res:any) {
        let movie = await this.moviesService.deleteMovie(movieId);
        return res.redirect('/movies');
    }
}
