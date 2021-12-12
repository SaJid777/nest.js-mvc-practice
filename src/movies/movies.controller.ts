import { Body, Controller, Get, Post, Render, Res, Param } from "@nestjs/common";
import { MoviesService } from "./movies.service";


@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService : MoviesService){}

    @Post('addMovie')
    addMovie(@Body() body:any, @Res() res:any) {
        this.moviesService.addMovie(body);
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
}
