import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  checkbox: boolean = false;
  showAddTask!: boolean;
  subsciption!: Subscription;

  constructor(private uiService: UiService) {
    uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}
  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
    }
    if (!this.day) {
      alert('Please add a day!');
    }

    const newTask = {
      text: this.text,
      day: this.text,
      reminder: this.checkbox,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.checkbox = false;
  }
}
