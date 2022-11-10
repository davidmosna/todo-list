import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoDto } from './dto/todo.dto';
import { TodoStatus } from './utils/types';

@Injectable()
export class TodosService {
  private readonly todos: Array<TodoDto> = [];

  create(createTodoDto: CreateTodoDto) {
    const id = this.todos.length > 0 ? this.todos.slice(-1)[0].id + 1 : 1;

    const newTodo: TodoDto = {
      ...createTodoDto,
      status: TodoStatus.TODO,
      createdAt: new Date(),
      id,
    };

    this.todos.push(newTodo);

    return newTodo;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    const idx = this.todos.findIndex((todo: TodoDto) => todo.id === id);

    if (idx === -1) {
      throw new NotFoundException();
    }

    return this.todos[idx];
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const idx = this.todos.findIndex((todo: TodoDto) => todo.id === id);

    if (idx === -1) {
      throw new NotFoundException();
    }

    const newTodo = {
      ...this.todos[idx],
      ...updateTodoDto,
    };

    this.todos.splice(idx, 1, newTodo);

    return newTodo;
  }

  remove(id: number) {
    const idx = this.todos.findIndex((todo: TodoDto) => todo.id === id);

    if (idx === -1) {
      throw new NotFoundException();
    }

    this.todos.splice(idx, 1);
  }
}
