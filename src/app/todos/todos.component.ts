import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: any = [];

  constructor(private _restApi: TodosService ) { }

  ngOnInit(): void {
    this._restApi.getTodos().subscribe(data => this.todos = data);
  }
}
