import { Param } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserType } from "./dto/UserType";
import { UserFindInput, UserInput , UserInputDelete,UserUpdateInput } from "./inputs/user.input";
import { UsersService } from "./users.service";



@Resolver()
export class UsersResolver {
  constructor(
    private readonly userService: UsersService,

  ) {}

  @Query(() => String)
  async hello(){
    return 'test usuario1';
  }

  @Query(() => [UserType])
  async users(){
      return this.userService.findAll();
  }

  @Mutation(()=> UserType)
  async createUser(@Args('input') input: UserInput){
      return this.userService.create(input);
  }

  @Mutation(()=> UserType)
  async updateUser(  @Args('update') UpdateUser: UserUpdateInput){
    return this.userService.updateUser(UpdateUser)
  }

  @Mutation(() => String)
  async deleteUser(@Args('inputDelete') inputDelete : UserFindInput): Promise<any>{
    await this.userService.deleteUser(inputDelete._id);
    return "User Removed succesfully";
  }

  @Query(() => UserType)
  async findUser(@Args('input') input: UserFindInput){
    return this.userService.findOne(input);
  }
/*
  @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }*/
}