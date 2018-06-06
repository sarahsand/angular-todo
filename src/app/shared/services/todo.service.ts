import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Todo } from '../classes/todo';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const requestOptions = { withCredentials: true };

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url = `${environment.apiBaseUrl}/todo`;

  constructor(private http: HttpClient) { }

  save(item: string): Observable<Todo> {

    return this.http.post<Todo>(this.url, new Todo(item), requestOptions);
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url, requestOptions);
  }

  updateTodo(todo: Todo): Observable<string> {
    const url = `${this.url}/${todo.id}`;

    return this.http.patch(url, todo, {
      withCredentials: true,
      responseType: 'text',
    });
  }

  deleteTodo(todo: Todo): Observable<string> {
    const url = `${this.url}/${todo.id}`;

    return this.http.delete(url, {
      withCredentials: true,
      responseType: 'text',
    });
  }
}
