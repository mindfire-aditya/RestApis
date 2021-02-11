import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges {

  public users: any = [];

  constructor(private userService: UsersService , private router: Router ) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => this.users = data); 
  }

  showDetails(id:any){
    this.router.navigate(['/users', id])
    console.log(id);
  }
}
