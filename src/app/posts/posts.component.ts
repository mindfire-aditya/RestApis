import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: any = [];

  constructor(private _restApi: PostsService ) { }

  ngOnInit(): void {
    this._restApi.getPosts().subscribe(data => this.posts = data);
  }
}
