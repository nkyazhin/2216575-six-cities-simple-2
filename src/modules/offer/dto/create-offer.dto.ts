import {OfferType} from '../../../types/offer-type.enum.js';
import { CityType } from '../../../types/city-type.enum.js';
import { Facilities } from '../../../types/facilities.enum.js';

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public postDate!: Date;
  public city!: CityType;
  public previewPath!: string;
  public images!: string[];
  public isPremium!: boolean;
  public rating!: number;
  public type!: OfferType;
  public bedroomsCount!: number;
  public guestsCount!: number;
  public price!: number;
  public facilities!: Facilities[];
  public commentCount!: number;
  public latitude!: number;
  public longitude!: number;
  public userId!: string;
}
