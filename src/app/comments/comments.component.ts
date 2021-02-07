import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments: any = [];

  constructor(private _restApi: CommentsService ) { }

  ngOnInit(): void {
    this._restApi.getComments().subscribe(data => this.comments = data);
  }
}
