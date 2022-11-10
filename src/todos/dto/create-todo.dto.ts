import { PickType } from '@nestjs/mapped-types';
import { TodoDto } from './todo.dto';

export class CreateTodoDto extends PickType(TodoDto, ['title']) {}
