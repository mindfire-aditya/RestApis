import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import { IPosts } from './Posts';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _rooturl = "https://jsonplaceholder.typicode.com/";
  private _childurl = "";
  private _url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPosts[]>{
    return this.http.get<IPosts[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(new Error(error.message || "Server Error"));
  }
}
