export class LionDto {

id: number | null = null;
name: string | null = null;


constructor(o?:Partial<LionDto>){
  Object.assign(this, o);

}


}