import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { UserType , UserTypeID } from './dto/UserType';
import { UserInput,UserUpdateInput,UserFindInput } from './inputs/user.input';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: UserInput): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(user: UserFindInput): Promise<User> {
    return this.userModel.findById(user._id);
  }

  async updateUser(updateUserDto: UserUpdateInput): Promise<User> {
    const updatedUser = await this.userModel.findOne(Types.ObjectId( updateUserDto._id));
    updatedUser.name = updateUserDto.name;
    updatedUser.age = updateUserDto.age;
    updatedUser.phone = updateUserDto.phone;
    return await updatedUser.save();
  }


  async deleteUser(_id: string): Promise<any>{
    return await this.userModel.deleteOne({_id: Types.ObjectId(_id)});
  }
}