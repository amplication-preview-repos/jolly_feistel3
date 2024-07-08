/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConversationWhereInput } from "./ConversationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ConversationOrderByInput } from "./ConversationOrderByInput";

@ArgsType()
class ConversationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ConversationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ConversationWhereInput, { nullable: true })
  @Type(() => ConversationWhereInput)
  where?: ConversationWhereInput;

  @ApiProperty({
    required: false,
    type: [ConversationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ConversationOrderByInput], { nullable: true })
  @Type(() => ConversationOrderByInput)
  orderBy?: Array<ConversationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ConversationFindManyArgs as ConversationFindManyArgs };
