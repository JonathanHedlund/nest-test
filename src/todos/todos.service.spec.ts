import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a todo', () => {
      const todo = service.create({ title: 'test', description: 'test' });
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
      const todos = service.findAll();
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
      const todo = service.findOne(1);
      expect(todo).toEqual({
        id: 1,
        title: 'Todo 1',
        description: 'Description 1',
        completed: false,
      });
    });
  });
  describe('remove', () => {
    it('should update a todo', () => {
      const todo = service.update(1, { title: 'test' });
      expect(todo).toEqual({
        id: 1,
        title: 'test',
        description: 'Description 1',
        completed: false,
      });
    });
  });

  describe('gneerateId', () => {
    it('should generate an id', () => {
      const id = service['generateId']();
      expect(id).toEqual(4);
    });
  });
});
