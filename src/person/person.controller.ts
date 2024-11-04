/* eslint-disable prettier/prettier */
import { Controller, Get,Post,Body } from "@nestjs/common";
import { PersonService } from "./person.service";
import { CreatePersonWithBulksDto } from "./dto/create-person.dto";

@Controller("persons")
export class PersonController  {
  
    constructor(private readonly personService:PersonService){}

    @Get()
    async getAllPerson(){
      return await this.personService.getAllPerson()
    }

    @Post()
    async createPerson(@Body() data:CreatePersonWithBulksDto){
     return await this.personService.createPerson(data)
    }

}