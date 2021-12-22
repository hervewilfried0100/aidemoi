import { CommuneEssentielVM } from "src/commune/vm/commune-vm";

export class QuartierDetailsVM {
  id: string;
  label: string;
  commune: CommuneEssentielVM

  constructor(data?: QuartierDetailsVM) {
    this.id = (data && data.id) ? data.id : null;
    this.label = (data && data.label) ? data.label : null;
    this.commune = (data && data.commune) ? new CommuneEssentielVM(data?.commune) : new CommuneEssentielVM();
  }
}

export class QuartierEssentielVM {
  id: string;
  label: string;

  constructor(data?: QuartierEssentielVM) {
    this.id = (data && data.id) ? data.id : null;
    this.label = (data && data.label) ? data.label : null;
  }
}