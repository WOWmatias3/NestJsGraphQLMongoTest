import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class UserType{
    
    @Field (() => ID)
    id : string;
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age : number;
    @Field(() => Int)
    readonly phone : number;
}

@ObjectType()
export class UserTypeID{
    @Field(() => ID)
    id:string;

}