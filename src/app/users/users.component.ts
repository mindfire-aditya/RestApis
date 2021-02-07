import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any = [];

  constructor(private _restApi: RestApiService, private router: Router ) { }

  ngOnInit(): void {
    this._restApi.getUsers().subscribe(data => this.users = data);
  }

  onClick(){
    
  }
}
