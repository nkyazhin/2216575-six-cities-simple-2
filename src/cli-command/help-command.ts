import { CliCommandInterface } from './cli-command.interface.js';
import chalk from 'chalk';

export default class HelpCommand implements CliCommandInterface {
  readonly name = '--help';

  async execute() {
    console.log(`
        ${chalk.blueBright('Программа для подготовки данных для REST API сервера.')}
        ${chalk.yellowBright('Пример:')}
            ${chalk.yellowBright('main.js --<command> [--arguments]')}
        ${chalk.blueBright('Команды:')}
            ${chalk.cyan('--version:')}                       # return version number
            ${chalk.cyan('--help:')}                          # print this text
            ${chalk.cyan('--generator')} ${chalk.green('<n> <filepath> <url>')} # generate random number of mocks
            ${chalk.cyan('--import ')} ${chalk.green('<filepath>')}             # import data from file .tsv
    `);
  }
}
