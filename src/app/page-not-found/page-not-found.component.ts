import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h2 id="notfound">
      Error 404, Page Not Found.
    </h2>
  `,
  styles: [`
   
#notfound{
  text-align: center;
  padding: 3vw
}
  `]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
