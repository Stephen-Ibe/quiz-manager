import { Body, Controller, Post } from '@nestjs/common';
import { SETTINGS } from 'src/utils';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  handleUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    userData: UserRegisterRequestDto,
  ) {
    return this.userService.handleUserRegistration(userData);
  }
}
