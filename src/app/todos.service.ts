import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodos } from './Todos';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _url: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodos[]>{
    return this.http.get<ITodos[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(new Error(error.message || "Server Error"));
  }
}
