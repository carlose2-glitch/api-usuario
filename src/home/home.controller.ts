import { Controller, Get } from '@nestjs/common';

@Controller({})
export class HomeController {
  @Get('/')
  home() {
    return 'hola ome';
  }
}
