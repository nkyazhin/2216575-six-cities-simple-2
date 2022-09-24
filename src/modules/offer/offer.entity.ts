import typegoose, { defaultClasses, getModelForClass, Ref } from '@typegoose/typegoose';
import { OfferType } from '../../types/offer-type.enum.js';
import { UserEntity } from '../user/user.entity.js';
import { CityType } from '../../types/city-type.enum.js';
import { Facilities } from '../../types/facilities.enum.js';

const { prop, modelOptions } = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public title!: string;

  @prop({ trim: true })
  public description!: string;

  @prop()
  public postDate!: Date;

  @prop({
    type: String,
    enum: CityType
  })
  public city!: CityType;

  @prop()
  public previewPath!: string;

  @prop()
  public images!: string[];

  @prop({ required: true, default: false })
  public isPremium!: boolean;

  @prop({ default: 0 })
  public rating!: number;

  @prop({
    type: String,
    enum: OfferType
  })
  public type!: OfferType;

  @prop({ default: 1 })
  public bedroomsCount!: number;

  @prop({ default: 1 })
  public guestsCount!: number;

  @prop()
  public price!: number;

  @prop({
    type: String,
    enum: Facilities
  })
  public facilities!: Facilities[];

  @prop({ default: 0 })
  public commentCount!: number;

  @prop()
  public latitude!: number;

  @prop()
  public longitude!: number;

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);
