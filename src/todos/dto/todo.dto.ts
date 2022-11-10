import { TodoStatus } from '../utils/types';

export class TodoDto {
  id: number;
  title: string;
  status: TodoStatus;
  createdAt: Date;
}
