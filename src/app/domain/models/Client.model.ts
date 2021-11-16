import * as SharedModel from "../shared/models";

import { People } from "./People.model";

export class Client extends People {
  private email: string;
  readonly registeredDay: Date;
  readonly phones: SharedModel.Phone[];
  constructor(
    email: string,
    name: string,
    CPF: string,
    birthDate: Date,
    gender: string,
    phones: SharedModel.Phone[]
  ) {
    super(name, CPF, birthDate, gender);
    this.email = email;
    this.phones = phones;
    this.registeredDay = new Date();
  }

  public set updateInfo(info: any) {
    this.email = info.email;
    this.name = info.name;
  }
}
