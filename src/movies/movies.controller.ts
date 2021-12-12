import { Body, Controller, Get, Post, Render, Res, Param, Put } from "@nestjs/common";
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

    @Get(':movieId')
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
