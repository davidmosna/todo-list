import { IsEnum, IsString, IsOptional } from 'class-validator';
import { TodoStatus } from '../utils/types';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsEnum(TodoStatus)
  status: TodoStatus;
}
