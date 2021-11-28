import * as SharedModel from "../shared/models";

import { People } from "./People.model";

export class Client extends People {
  readonly id: number;
  private email: string;
  readonly registeredDay: Date;
  readonly phones: SharedModel.Phone[];
  constructor(
    id: number,
    email: string,
    name: string,
    CPF: string,
    birthDate: Date,
    gender: string,
    phones: SharedModel.Phone[]
  ) {
    super(name, CPF, birthDate, gender);
    this.id = id;
    this.email = email;
    this.phones = phones;
    this.registeredDay = new Date();
  }

  public set updateInfo(info: any) {
    this.email = info.email;
    this.name = info.name;
  }
}
