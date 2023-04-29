import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  async handleUserRegistration(
    userData: UserRegisterRequestDto,
  ): Promise<User> {
    const user = new User();
    user.name = userData.name;
    user.email = userData.email;
    user.password = userData.password;

    return await user.save();
  }

  async getUserByEmail(email: string): Promise<User | unknown> {
    return User.findOne({ where: { email } });
  }
}
