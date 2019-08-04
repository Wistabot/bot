import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import {Observable, Subject} from "rxjs/Rx";
import { element } from 'protractor';

@Injectable()
export class AdminGuardService implements CanActivate {

    path = environment.path + '/authentication'
    
    constructor(private auth: AuthService, private http: HttpClient) { }
    
    canActivate() {
        return this.http.get<any>(this.path + '/role/').map(res => {
            if(res.role !== 'admin') {
                return false
            } else {
                return true
            }
        })
    }

}
