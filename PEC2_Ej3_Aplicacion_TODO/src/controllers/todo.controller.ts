import { Todo } from "../models/todo.model.js";
import { TodoService } from "../services/todo.service.js";
import { TodoView } from "../views/todo.views.js";

// Interface que descriu les propietats del controller
export interface StructureController {
  onTodoListChanged(todos: Todo[]): void;
  handleAddTodo(todoText: string): void;
  handleEditTodo(id: string, todoText: string): void;
  handleDeleteTodo(id: string): void;
  handleToggleTodo(id: string): void;
}

/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
export class TodoController implements StructureController {
  private service: TodoService;
  private view: TodoView;

  constructor(service: TodoService, view: TodoView) {
    this.service = service;
    this.view = view;

    // Explicit this binding
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    // Display initial todos
    this.onTodoListChanged(this.service.todos);
  }

  onTodoListChanged = (todos: Todo[]) => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = (todoText: string) => {
    this.service.addTodo(todoText);
  };

  handleEditTodo = (id: string, todoText: string) => {
    this.service.editTodo(id, todoText);
  };

  handleDeleteTodo = (id: string) => {
    this.service.deleteTodo(id);
  };

  handleToggleTodo = (id: string) => {
    this.service.toggleTodo(id);
  };
}
