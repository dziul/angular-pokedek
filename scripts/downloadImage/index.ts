import axios from 'axios';
import * as chalk from 'chalk';
import { createWriteStream } from 'fs';
import * as path from 'path';

import { developmentConfig } from '../env.config';
import { Generation, Generations } from './model/generations.model';

axios.interceptors.request.use((config) => {
  config.timeout = 10000;
  console.log(chalk.yellow(`Request - ${config.url}`));
  return config;
});

const downloadImage = (url: string, imageName: string) => {
  const dir = '../../src/assets/images/pokemons/small/';

  return axios
    .get(url, { responseType: 'stream' })
    .then((response) => {
      return new Promise((resolve, reject) => {
        const extesion = response.data.headers['content-type'].split('/').pop();
        const pathName = `${dir}${imageName}.${extesion}`;
        const pathSave = path.resolve(__dirname, pathName);
        response.data
          .pipe(createWriteStream(pathSave))
          .on('finish', () => {
            console.log(` - Downloaded to ${pathSave}`);
            resolve();
          })
          .on('error', () => {
            console.log(chalk.red(`Error - ${pathSave}`));
            reject();
          });
      });
    })
    .catch((error: Error) => {
      console.log(chalk.red(`${error.message} - ${url}`));
    });
};

const pokemonImages = () => {
  const urlApi = developmentConfig.urlApi;
  let success = 0;
  let errros = 0;
  return axios
    .get<Generations>(`${urlApi}/generation`, { responseType: 'json' })
    .then((response) => {
      const generations = response.data.results.map(
        async (result) => (await axios.get<Generation>(result.url)).data
      );

      return Promise.all(generations);
    })
    .then((response): string[] =>
      response.reduce((list, generation) => {
        generation.pokemon_species.forEach((item) => list.push(item.name));
        return list;
      }, [])
    )
    .then((pokemonNames) => {
      let time = 0;
      const downloads = pokemonNames.map((name) => {
        const url = `https://img.pokemondb.net/sprites/sword-shield/icon/${name}.png`;
        time += 50;
        return new Promise((resolve) => {
          setTimeout(async () => {
            await downloadImage(url, name)
              .then(() => (success += 1))
              .catch(() => (errros += 1));
            resolve();
          }, time);
        });
      });

      return Promise.all(downloads);
    })
    .then(() => {
      console.log(`Success: ${success}, Errors: ${errros}`);
    });
};

pokemonImages();

// downloadImage('https://img.pokemondb.net/sprites/sword-shield/icon/pikachu.png', 'pikachu');
