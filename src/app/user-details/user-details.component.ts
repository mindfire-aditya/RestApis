import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { RestApiService } from '../rest-api.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userDetail: any;
  public userId: any;

  constructor(private route: ActivatedRoute, private router: Router, private _restApi: RestApiService) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.userId = parseInt(id as string);
    // this._restApi.getUserWithId(this.userId).subscribe(data => this.user = data);

    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = params.get('id');
      let uId = parseInt(id as string);
    this.userId = uId;
    });

    this._restApi.getUserWithId(this.userId).subscribe(data =>{
      this.userDetail = data;
      console.log(this.userDetail);
    });
  }

  goPrevious(){
    if(this.userId as number < 1){}
    else{
      this.userId = this.userId - 1;
    this.router.navigate(['/users', this.userId]);
    }
  }

  goNext(){
    if(this.userId  as number  > 10){}
    else{
      this.userId = this.userId + 1;
      this.router.navigate(['/users', this.userId]);
    }
  }

}
