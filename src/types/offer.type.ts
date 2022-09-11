import { Location } from './location.type.js';
import { User } from './user.type.js';
import { OfferType } from './offer-type.enum.js';
import { Facilities } from './facilities.enum.js';
import { CityType } from './city-type.enum.js';

export type Offer = {
  title: string,
  description: string,
  createdDate: Date,
  city: CityType,
  previewPath: string,
  images: string[],
  isPremium: boolean,
  rating: number,
  type: OfferType,
  bedroomsCount: number,
  guestsCount: number,
  price: number,
  facilities: Facilities[],
  commentsCount: number,
  location: Location,
  author: User,
}
