import {TodoItem} from './todoItem';

export class TodoList {
	constructor(public user: String, private todoItems: TodoItem[] = []) {

	}

	get items(): readonly TodoItem[] {
		return this.todoItems
	}

	addItem(newItem: TodoItem) {
		this.todoItems.push(newItem);
	}

}