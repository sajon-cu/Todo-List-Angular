import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import {TodoList} from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  list = new TodoList("Sajon", [
    new TodoItem("Go for lunch"),
    new TodoItem("Collect ticket"),
    new TodoItem("Lunch break"),
    new TodoItem("Make dinner"),
    new TodoItem("Play football at evening"),
    new TodoItem("Take rest"),
    new TodoItem("Give reaward to all new user"),
    new TodoItem("Inform Asif bhai about new changes"),
    new TodoItem("Release a new version to play store"),
    new TodoItem("Fix offline caching bugs"),

  ])

  get username(): String {
    return "Sajon"
  }

  get itemCounts(): number {
    return this.list.items.filter( item => !item.complete ).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter( item => !item.complete)
  }

  addTask(newItem: String) {
    if(newItem != "") {
      this.list.addItem(new TodoItem(newItem))
    }
  }
}
