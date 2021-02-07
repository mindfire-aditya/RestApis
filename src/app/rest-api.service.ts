import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from './Users';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private _url: string = "https://jsonplaceholder.typicode.com/users/";

  constructor(private http: HttpClient) { }

  getUserWithId(id: number): Observable<IUsers>{
    console.log(this._url + id);
    return this.http.get<IUsers>(this._url + id);
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(new Error(error.message || "Server Error"));
  }
}
