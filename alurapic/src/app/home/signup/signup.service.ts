import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewUser } from "./new-user";

import { environment } from '../../../environments/environment'

const API = environment.ApiUrl;


@Injectable({providedIn:'root'})
export class SignUpService{
    constructor(private http: HttpClient){

    }

    signup(newUser:NewUser){
        return this.http.post(API + '/user/signup', newUser);
    }
}