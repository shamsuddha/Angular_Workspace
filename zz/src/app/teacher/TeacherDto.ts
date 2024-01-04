export class TeacherDto {

  id: number | null = null;
  name: string | null = null;
  carId: number | null = null;

  constructor(o?:Partial<TeacherDto>){
    Object.assign(this,o);
    }


}
