import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leidos Application';

  constructor(private svc: RestService, private http: HttpClient) {

  }


  ngOnInit() {
    //const obs = this.http.get('/https://jsonplaceholder.typicode.com/users');
    //obs.subscribe((response) => console.log(response));
    const observer = this.getUsers();
    //observer.subscribe((response) => console.log(response));
  }

  getUsers() {
    this.users = [];
    this.rest.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
  }
}
