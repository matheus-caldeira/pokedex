import IAbility from './IAbility';
import IStat from './IStat';
import IType from './IType';

interface IPokemon {
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
  abilities: IAbility[];
  stats: IStat[];
  types: IType[];
  hidden?: boolean;
}

export default IPokemon;
