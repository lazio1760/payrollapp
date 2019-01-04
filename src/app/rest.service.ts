import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()

export class RestService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

// Uses http.get() to load data from a single API endpoint
  getUsers() {
    const req = new HttpRequest('GET', this.url, {
      reportProgress: true
    });
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  /*const endpoint = 'https://jsonplaceholder.typicode.com/users';
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getUsers(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  } */


  /*private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } */

}
