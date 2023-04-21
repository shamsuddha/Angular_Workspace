export class User {

  id: number | null = null;
  name: string | null = null;

  constructor(o?: Partial<User>) {
    Object.assign(this, o);
  }
}
