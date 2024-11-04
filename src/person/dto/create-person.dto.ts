/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsArray,IsInt } from 'class-validator';
import { IBulkDto } from './create-bulk.dto';

export class CreatePersonWithBulksDto  {
  @IsInt()
  collection_direction: number;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  destination_address: string;

  @IsString()
  telephone: string;

  @IsEmail()
  email: string;

  @IsString()
  indications: string;

  @IsString()
  department: string;

  @IsString()
  town: string;

  @IsString()
  reference: string;

  @IsString()
  scheduled_date: Date;

  @IsArray()
  bulks: IBulkDto[];

}
