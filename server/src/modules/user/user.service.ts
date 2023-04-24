import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  async handleUserRegistration(
    userData: UserRegisterRequestDto,
  ): Promise<User> {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(userData.password, salt);

    const user = new User();
    user.name = userData.name;
    user.email = userData.email;
    user.password = password;

    return await user.save();
  }
}
