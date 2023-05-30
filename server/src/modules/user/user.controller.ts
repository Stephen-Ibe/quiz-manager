import { Body, Controller, Post } from '@nestjs/common';
import { SETTINGS } from 'src/utils';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { UserService } from './user.service';
import { User } from './user.entity';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @ApiCreatedResponse({
    description: 'Created user object as response',
    type: User,
  })
  @ApiBadRequestResponse({
    description: 'User registeration failed. Try Again!',
  })
  async handleUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    userData: UserRegisterRequestDto,
  ): Promise<User> {
    return await this.userService.handleUserRegistration(userData);
  }
}
