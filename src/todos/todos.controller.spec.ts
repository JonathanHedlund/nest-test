import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

describe('TodosController', () => {
  let controller: TodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService],
    }).compile();

    controller = module.get<TodosController>(TodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a todo', () => {
      const todo = controller.create({
        title: 'test',
        description: 'test',
      });
      expect(todo).toEqual({
        id: 4,
        title: 'test',
        description: 'test',
        completed: false,
      });
    });
  });

  describe('findAll', () => {
    it('should return all todos', () => {
      const todos = controller.findAll();
      expect(todos).toEqual([
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
      ]);
    });
  });

  describe('findOne', () => {
    it('should return a todo', () => {
      const todo = controller.findOne('1');
      expect(todo).toEqual({
        id: 1,
        title: 'Todo 1',
        description: 'Description 1',
        completed: false,
      });
    });
  });
});
