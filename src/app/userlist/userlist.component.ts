import { Component, OnInit } from '@angular/core';import { Jsonp } from '@angular/http';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  allUserList : any;
  constructor(public http: Http, public router: Router) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json()).subscribe(
      data => {
        this.allUserList = data;
      });
  }

  navigateToSingleUser(id){
    this.router.navigateByUrl('/user_details/'+id);
  }

}
