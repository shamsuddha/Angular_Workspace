export class StudentDto {

  id: number | null = null;
  name: string | null = null;

  constructor(o?:Partial<StudentDto>){
    Object.assign(this,o);
    }
}