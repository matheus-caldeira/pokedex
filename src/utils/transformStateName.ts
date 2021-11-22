type IStatCustomName = {
  [t: string]: string;
};

const IStatCustomName: IStatCustomName = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'STAK',
  'special-defense': 'SDEF',
  speed: 'SPD',
};

export default function transformStateName(state: string): string {
  return IStatCustomName[state] || 'UNK';
}
