import { Todo } from "../models/todo.model.js";

/**
 * @class Service
 *
 * Manages the data of the application.
 */
export class TodoService {
  public todos: Todo[];
  private onTodoListChanged: (todos: Todo[]) => void;

  constructor() {
    const storedTodos = localStorage.getItem("todos");
    const parsedTodos = storedTodos ? JSON.parse(storedTodos) : [];
    this.todos = parsedTodos.map((todo: Todo) => new Todo(todo));
    this.onTodoListChanged = () => {}; 
  }

  bindTodoListChanged(callback: (todos: Todo[]) => void): void {
    this.onTodoListChanged = callback;
  }

  private _commit(todos: Todo[]): void {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string): void {
    this.todos.push(new Todo({ text }));

    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
          ...todo,
          text: updatedText
        })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id: string): void {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}
