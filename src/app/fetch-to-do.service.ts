import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

interface ToDo {
  id: number;
  user_id: number;
  title: string;
  due_on: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class FetchToDoService {
  toDoURL = 'https://gorest.co.in/public/v2/todos';

  constructor(private http: HttpClient) {}

  getToDo(status: string, whichOne: number) {
    return this.http
      .get<ToDo[]>(this.toDoURL, {
        params: { status, page: whichOne, per_page: 1 },
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An application error has occurred:', error.error);
    } else {
      console.error(`The API returned code ${error.status}`);
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
