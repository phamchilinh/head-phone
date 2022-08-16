import { Body, Controller, HttpStatus, Post, Res, Get} from "@nestjs/common";
import { User } from "../model/user.schema";
import { UserService } from "../service/user.service";
import { ApiTags } from '@nestjs/swagger';


@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userServerice: UserService
  ) { }

  @Post('/signin')
  async SignIn(@Body() user: User) {
    const useraccess = await this.userServerice.signin(user);
    return useraccess
  }

  @Post('/signup')
  async SignUp(@Body() user: User) {
    const useraccess = await this.userServerice.signup(user);
    const { _id, ...restUser } = useraccess._doc;
    return { id: _id }
  }
}