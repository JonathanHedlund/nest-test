export class Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;

  constructor(id: number, title: string, description: string, status: boolean) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = status;
  }
}
