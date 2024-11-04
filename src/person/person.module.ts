/* eslint-disable prettier/prettier */
import {  Module } from "@nestjs/common";
import { PersonController } from "./person.controller";
import { PersonService } from "./person.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[PersonController],
    providers:[PersonService],
    imports:[PrismaModule]
})
export class PersonModule  {}