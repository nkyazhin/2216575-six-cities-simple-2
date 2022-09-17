import got from 'got';
import TSVFileWriter from '../common/file-writer/tsv-file-writer.js';
import OfferGenerator from '../common/offer-generator/offer-generator.js';
import { MockData } from '../types/mock-data.type.js';
import { CliCommandInterface } from './cli-command.interface.js';

export default class GenerateCommand implements CliCommandInterface {
  readonly name = '--generate';
  private initialData!: MockData;

  async execute(...parameters:string[]): Promise<void> {
    const [count, filepath, url] = parameters;
    if (!(count && filepath && url)) {
      console.log('Not passed all parameters: <n> <filepath> <url>');
      return;
    }
    const offerCount = Number.parseInt(count, 10);
    if (!offerCount) {
      console.log('Parameter <n> is not a Number');
      return;
    }

    try {
      this.initialData = await got.get(url).json();
    } catch {
      return console.log(`Can't fetch data from ${url}.`);
    }

    const offerGeneratorString = new OfferGenerator(this.initialData);
    const tsvFileWriter = new TSVFileWriter(filepath);

    for (let i = 0; i < offerCount; i++) {
      await tsvFileWriter.write(offerGeneratorString.generate());
    }

    console.log(`File ${filepath} was created!`);
  }
}
