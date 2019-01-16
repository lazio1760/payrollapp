import { Component, OnInit} from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = [];

  constructor(private svc: RestService, private http: HttpClient) { }

  ngOnInit() {
    const observer = this.getUsers();
  }

  getUsers() {
    this.users = [];
    this.svc.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
  }

  /*someFunction() {
    console.log('Clicked a link!!!');
  }*/

}
