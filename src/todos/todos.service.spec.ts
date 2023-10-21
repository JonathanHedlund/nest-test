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
        id: 1,
        title: 'test',
        description: 'test',
        completed: false,
      });
    });
  });
});
