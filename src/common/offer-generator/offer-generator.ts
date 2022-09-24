import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.type.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { generateRandomValue, getRandomBoolean, getRandomItem, getRandomItems } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { CityType } from '../../types/city-type.enum.js';
import { Facilities } from '../../types/facilities.enum.js';


export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs().subtract(generateRandomValue(1, 7), 'day').toISOString();
    const city = getRandomItem(Object.values(CityType));
    const previewPath = getRandomItem<string>(this.mockData.previewImagesPath);
    const images = getRandomItems<string>(this.mockData.previewImagesPath).join(';');
    const isPremium = getRandomBoolean();
    const rating = generateRandomValue(1, 5, 1);
    const type = getRandomItem(Object.values(OfferType));
    const bedroomsCount = generateRandomValue(1, 8);
    const guestsCount = generateRandomValue(1, 10);
    const price = generateRandomValue(100, 100_000);
    const facilities = getRandomItems(Object.keys(Facilities)).join(';');
    const commentCount = generateRandomValue(0, 1000);
    const latitude = generateRandomValue(0, 90, 6);
    const longitude = generateRandomValue(0, 180, 6);
    const name = getRandomItem<string>(this.mockData.users);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const isPro = getRandomBoolean();

    return [
      title, description, postDate, city,
      previewPath, images, isPremium, rating,
      type, bedroomsCount, guestsCount, price,
      facilities, commentCount, latitude, longitude,
      name, email, avatar, isPro
    ].join('\t');
  }
}
