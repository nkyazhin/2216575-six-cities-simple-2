import { readFileSync } from 'fs';
import { OfferType } from '../../types/offer-type.enum.js';
import { Facilities } from '../../types/facilities.enum.js';
import { Offer } from '../../types/offer.type.js';
import { FileReaderInterface } from './file-reader.interface.js';
import { CityType } from '../../types/city-type.enum.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map((test) => {
        const [
          title,
          description,
          createdDate,
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
          commentsCount,
          latitude,
          longitude,
          name,
          email,
          avatarPath,
          password,
          isPro
        ] = test;
        console.log(test);
        return {
          title,
          description,
          createdDate: new Date(createdDate),
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
          commentsCount: Number.parseInt(commentsCount, 10),
          location: {
            latitude: Number.parseFloat(latitude),
            longitude: Number.parseFloat(longitude)
          },
          author: {
            name,
            email,
            avatarPath,
            password,
            isPro: Boolean(isPro)
          },
        };
      });
  }
}
