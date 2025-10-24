import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private http = inject(HttpClient);
  private readonly API_URL = 'https://jsonplaceholder.typicode.com';

  private MockTasks: Task[] = [
   { 
    id: 1,
    title: 'Learn Angular',
    description: 'Studt Standalone Angular Component',
    completed: true,
    createdAt: new Date('2025-01-01')
   },
    { 
    id: 2,
    title: 'Build Project',
    description: 'Create a complete angular project',
    completed: false,
    createdAt: new Date('2025-01-02')
   }
   
  ] 

  getTasks(): Observable<Task[]>{
    return of(this.MockTasks);
  }
  
}
