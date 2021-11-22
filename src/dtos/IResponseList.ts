export interface IResult {
  name: string;
  url: string;
}

interface IResposeList {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: IResult[];
}

export default IResposeList;
