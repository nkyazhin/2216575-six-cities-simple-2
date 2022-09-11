import { CliCommandInterface } from './cli-command.interface.js';
import { readFileSync } from 'fs';

export default class VersionCommand implements CliCommandInterface {
  readonly name = '--version';

  private readVersion(): string {
    const contentPageJson = readFileSync('./package.json', 'utf-8');
    const content = JSON.parse(contentPageJson);
    return content.version;
  }

  async execute() {
    const version = this.readVersion();
    console.log(version);
  }
}
