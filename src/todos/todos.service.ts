import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  private id = 4;

  private todos = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Description 1',
      completed: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Description 2',
      completed: false,
    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'Description 3',
      completed: false,
    },
  ];

  create(createTodoDto: CreateTodoDto) {
    const { title, description } = createTodoDto;

    return {
      id: this.generateId(),
      title,
      description,
      completed: false,
    };
  }

  findAll(completed?: boolean): Todo[] {
    if (completed === undefined) {
      return this.todos;
    }

    return this.todos.filter((todo) => todo.completed === completed);
  }

  findOne(id: number): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = this.findOne(id);
    const updatedTodo = { ...todo, ...updateTodoDto };

    this.todos = this.todos.map((todo) =>
      todo.id === id ? updatedTodo : todo,
    );

    return updatedTodo;
  }

  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    return { deleted: true };
  }

  private generateId() {
    return this.id++;
  }
}
