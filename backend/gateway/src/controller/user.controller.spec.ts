import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../service/user.service';
import { UserController } from './user.controller';
import { User } from "../model/user.schema";


describe('UsersController', () => {
  let userController: UserController;
  const mockUserService = {
    getHello: jest.fn(() => {
      return 'Hello World!';
    }),
    signin: jest.fn((user) => ({
      "status": 200,
      "message": "user_signin_success",
      "id": "622996d57069c00dd276b625"
    })),
    signup: jest.fn((user) => ({
      _doc: {
        _id: "123553421g23e32ff",
        email: 'phamlinh@gmail.com',
        password: '12345678'
      }
    }))
  };
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();
    userController = moduleRef.get<UserController>(UserController);
  });
  describe('signin success', () => {
    it('should return id', async () => {
      const user: User = {
        fullname: '',
        email: 'phamlinh@gmail.com',
        password: '12345678',
        createdDate: null

      }
      expect(await userController.SignIn(user)).toEqual({
        "status": 200,
        "message": "user_signin_success",
        "id": "622996d57069c00dd276b625"
      });
    });
  });
  describe('signup success', () => {
    it('should return id', async () => {
      const user: User = {
        fullname: 'linh pham',
        email: 'phamlinh@gmail.com',
        password: '12345678',
        createdDate: null

      }
      expect(await userController.SignUp(user)).toEqual({
        id: "123553421g23e32ff"
      });
    });
  });
});
