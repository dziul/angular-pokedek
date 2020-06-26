import { execSync } from 'child_process';
import { writeFile } from 'fs';

type Config = {
  version?: string;
  production: boolean;
  urlApi: string;
};

const { env } = process;

export const developmentConfig: Config = {
  version: env.npm_package_version,
  production: false,
  urlApi: 'https://pokeapi.co/api/v2',
};

const produtionConfig: Config = {
  ...developmentConfig,
  production: true,
};

const pathName = (suffixName: string) => {
  const suffix = suffixName ? `.${suffixName}` : '';
  return `./src/environments/environment${suffix}.ts`;
};

const fileData = (data: object) =>
  `export const environment = ${JSON.stringify(data, null, '  ')};`;

const setFile = (suffix: string, data: object) =>
  writeFile(pathName(suffix), fileData(data), (error) => {
    if (error) {
      console.log(error);
    } else {
      execSync(`tslint -c tslint.json ${pathName(suffix)} --fix --force`);
    }
  });

setFile('', developmentConfig);
setFile('prod', produtionConfig);
