/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Person } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonWithBulksDto } from './dto/create-person.dto';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  async getAllPerson(): Promise<Person[]> {
    return this.prisma.person.findMany({
        include: {
            Bulk: true, // Esto incluirá los bultos relacionados con cada persona
        },
    });
  }
  

  async createPerson(data: CreatePersonWithBulksDto): Promise<Person> {
    const { bulks, ...personData } = data;

    // Crear la persona y los bultos en una transacción
    return await this.prisma.person.create({
      data: {
        ...personData,
        Bulk: {
          create: bulks, // Crear los bulks relacionados
        },
      },
    });
  }
}
