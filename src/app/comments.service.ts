import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { IComments } from './Comments';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private _rooturl = "https://jsonplaceholder.typicode.com/";
  private _childurl = "";
  private _url: string = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http: HttpClient) { }

  getComments(): Observable<IComments[]>{
    return this.http.get<IComments[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(new Error(error.message || "Server Error"));
  }
}
