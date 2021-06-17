import { Field, Int,  InputType, ID} from "@nestjs/graphql";

@InputType()
export class UserInput{

    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age : number;
    @Field(() => Int)
    readonly phone : number;
}

@InputType()
export class UserUpdateInput{
    @Field()
    readonly _id:string;
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age : number;
    @Field(() => Int)
    readonly phone : number;
}

@InputType()
export class UserFindInput{
    @Field()
    readonly _id: string;

}

@InputType()
export class UserInputDelete{
    @Field(() => ID)
    id: string;

}
