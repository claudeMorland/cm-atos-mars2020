import { PrestationI } from '../interface/prestations-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: number;
  typePresta: string;
  client: string;
  tjmHt = 1200;
  nbJours= 1;
  tva = 20;
  state = State.OPTION;
  comment: string;

  constructor (obj?: Partial<Prestation>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

  totalHt(): number {
   return this.tjmHt * this.nbJours;
  }

  totalTtc(): number {
    if (this.tva <= 0) {
      return this.totalHt();
    }
    return this.totalHt() * (1 + this.tva / 100);
  }

}
