import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWidgetDto {
  @IsString()
  title: string;

  @IsNotEmpty()
  description: string;
}
