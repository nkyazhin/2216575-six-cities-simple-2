import crypto from 'crypto';
import { OfferType } from '../types/offer-type.enum.js';
import { Offer } from '../types/offer.type.js';
import { CityType } from '../types/city-type.enum.js';
import { Facilities } from '../types/facilities.enum.js';

export const createOffer = (row: string): Offer => {
  const tokens = row.replace('\n', '').split('\t');
  const [
    title,
    description,
    postDate,
    city,
    previewPath,
    images,
    isPremium,
    rating,
    type,
    bedroomsCount,
    guestsCount,
    price,
    facilities,
    commentCount,
    latitude,
    longitude,
    name,
    email,
    avatarPath,
    isPro
  ] = tokens;
  return {
    title,
    description,
    postDate: new Date(postDate),
    city: CityType[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
    previewPath,
    images: images.split(';'),
    isPremium: Boolean(isPremium),
    rating: Number.parseFloat(rating),
    type: OfferType[type as 'Apartment' | 'House' | 'Room' | 'Hotel'],
    bedroomsCount: Number.parseInt(bedroomsCount, 10),
    guestsCount: Number.parseInt(guestsCount, 10),
    price: Number.parseInt(price, 10),
    facilities: facilities.split(';').map((facility) => Facilities[facility as 'Breakfast' | 'AirConditioning' | 'Workspace' | 'BabySeat' | 'Washer' | 'Towels' | 'Fridge' ]),
    commentCount: Number.parseInt(commentCount, 10),
    latitude: Number.parseFloat(latitude),
    longitude: Number.parseFloat(longitude),
    author: {
      name,
      email,
      avatarPath,
      isPro: Boolean(isPro)
    },
  };
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';

export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};
