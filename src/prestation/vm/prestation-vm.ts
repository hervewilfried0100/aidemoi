export class PrestationDetailsVM {
  id: string;
  label: string;
  totalPrestation?: number;

  constructor(data?: PrestationDetailsVM) {
    this.id = (data && data.id) ? data.id : null;
    this.label = (data && data.label) ? data.label : null;
    this.totalPrestation = (data && data.totalPrestation) ? data.totalPrestation : 0;
  }
}

export class PrestationEssentielVM {
  id: string;
  label: string;

  constructor(data?: PrestationEssentielVM) {
    this.id = (data && data.id) ? data.id : null;
    this.label = (data && data.label) ? data.label : null;
  }
}