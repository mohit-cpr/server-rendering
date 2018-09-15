import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails : any;
  constructor(public http: Http, public router: Router, private meta:Meta) { }

  ngOnInit() {
    this.meta.addTag({ property: 'og:description', content: 'mycontent' });
    this.getUserDetails();
  }

  getUserDetails(){
    var url = this.router.url.split('/');
    this.http.get('https://jsonplaceholder.typicode.com/posts/'+url[2]).map(res => res.json()).subscribe(
      data => {
        this.userDetails = data;
      });
  }

}
