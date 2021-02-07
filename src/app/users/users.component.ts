import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any = [];

  constructor(private userService: UsersService , private router: Router ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => this.users = data); 
  }

  showDetails(id:any){
    this.router.navigate(['/users', id])
    console.log(id);
  }
}
