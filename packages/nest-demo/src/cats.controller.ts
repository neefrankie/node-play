import { Controller, Get, Post } from '@nestjs/common';

type ICat = {
  id: number;
  name: string;
  breed: string;
};

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): ICat[] {
    return [
      {
        id: 1,
        name: 'Hello',
        breed: 'a',
      },
      {
        id: 2,
        name: 'World',
        breed: 'b',
      },
    ];
  }
}
