import { partition } from "rxjs";

export class HorseDto {

  id: number | null = null;
  name: string | null = null;
  address: string | null = null;
  divisionId: number | null = null;
  divisionName: string | null = null;
  districtId: number | null = null;
  districtName: string | null = null;
  thanaId: number | null = null;
  thanaName: string | null = null;
  gender: string | null = null;
  

  constructor(o?: Partial<HorseDto>) {
    Object.assign(this, o);

  }


}