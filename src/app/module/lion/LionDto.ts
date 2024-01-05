export class LionDto{
  id: number| null = null;
  lionName: string | null = null;

  constructor(o?:Partial<LionDto>){
    Object.assign(this, o);

  }

}