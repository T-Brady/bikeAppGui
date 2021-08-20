import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
@Injectable()
export class AppService {
    constructor(
        private http: HttpClient
    ){

    }
    loginUser(params: any){

        return this.http.post("http://localhost:3000/login", params);
    }
}