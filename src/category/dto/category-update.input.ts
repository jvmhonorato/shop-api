/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length, Matches, Validate } from 'class-validator'
import { CategorySlugIsUnique } from '../validations/CategorySlugIsUnique'
const mobileNumberRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

@InputType()
export class CategoryUpdateInput {
  @Field()
  @IsUUID()
  id: string

  @Field()
  @Length(4, 20)
  name: string

  @Field()
  @Length(4, 20)
  @Matches(mobileNumberRegex)
  @Validate(CategorySlugIsUnique)
  slug: string
}
