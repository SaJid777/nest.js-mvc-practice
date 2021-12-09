import { Injectable } from "@nestjs/common";
@Injectable()

export class TestService{
    getTest():string{
        return "Test Module";
    }

    getNewTest():string{
        return "New Test Module";
    }
}