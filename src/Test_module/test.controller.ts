import { Body, Controller, Get, Post } from "@nestjs/common";
import { TestService } from "./test.service";
import { createDto } from "./dtos/create.dto";

@Controller('test')

export class TestController{ 
    constructor(private readonly testService : TestService){}

    @Get('getTest')
    getTest():string {
        return this.testService.getTest();
    }

    @Get('getNewTest')
    getNewTest():string {
        return this.testService.getNewTest();
    }

    @Post('postTest')
    postTest(@Body() data:createDto){
        return this.testService.postTest(data); 
    }
}