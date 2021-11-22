import { AxiosInstance } from 'axios';
import IPokemon from '../dtos/IPokemon';
import IResposeList, { IResult } from '../dtos/IResponseList';
import api from './api';

class Service {
  private api: AxiosInstance;

  static INSTANCE: Service;

  private constructor() {
    this.api = api;
  }

  public static getInstance(): Service {
    if (!Service.INSTANCE) {
      Service.INSTANCE = new Service();
    }

    return Service.INSTANCE;
  }

  public async list(offset = 0, limit = 10): Promise<IPokemon[]> {
    try {
      const { data } = await this.api.get<IResposeList>('/pokemon', {
        params: {
          offset,
          limit,
        },
      });

      const pokemons = await Promise.all(
        data.results.map(async result => this.getPokemon(result)),
      );

      return pokemons.filter(Boolean) as IPokemon[];
    } catch {
      return [];
    }
  }

  public async getDescription(id: string | number): Promise<string> {
    try {
      const { data } = await this.api.get(`/pokemon-species/${id}`);

      const flavor_text = data.flavor_text_entries.find(
        (flavor: any) => flavor.language.name === 'en',
      );

      return flavor_text.flavor_text || '';
    } catch {
      return '';
    }
  }

  private async getPokemon(result: IResult): Promise<IPokemon | undefined> {
    try {
      const { data } = await this.api(`/pokemon/${result.name}`);

      return Service.transformResponseToIPokemon(data);
    } catch {
      return undefined;
    }
  }

  static transformResponseToIPokemon(data: any): IPokemon {
    return {
      id: data.id,
      height: data.height,
      weight: data.weight,
      image: data.sprites.other['official-artwork'].front_default,
      name: data.name,
      description: '',
      abilities: data.abilities,
      stats: data.stats,
      types: data.types,
    };
  }
}

export default Service;
