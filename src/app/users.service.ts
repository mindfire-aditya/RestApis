import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from './Users';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private _rooturl = "https://jsonplaceholder.typicode.com/";
  private _childurl = "";
  private _url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(new Error(error.message || "Server Error"));
  }
}
