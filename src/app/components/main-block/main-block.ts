import { Component } from '@angular/core';
import { TaskForm } from "./task-form/task-form";
import { TaskItem } from "./task-item/task-item";

@Component({
  selector: 'main-block',
  imports: [TaskForm, TaskItem],
  templateUrl: './main-block.html',
  styleUrl: './main-block.scss'
})
export class MainBlock {

}
