import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  handleUserRegistration(userData: UserRegisterRequestDto) {
    const user = new User();
  }
}
