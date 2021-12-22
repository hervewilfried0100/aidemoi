import { CommuneEssentielVM } from "src/commune/vm/commune-vm";
import { PrestataireDetailsVM } from "src/prestataire/vm/prestataire-vm";

export class VilleDetailsVM {
  id: string;
  label: string;
  prestataires: Array<PrestataireDetailsVM>;
  communes: Array<CommuneEssentielVM>;

  constructor(data?: VilleDetailsVM) {
    this.id = (data && data.id) ? data.id : null;
    this.label = (data && data.label) ? data.label : null;
    this.prestataires = (data && data.prestataires) ? data.prestataires : [];
    this.communes = (data && data.communes) ? data.communes : [];
  }
}

export class VilleEssentielVM {
  id: string;
  label: string;

  constructor(data?: VilleEssentielVM) {
    this.id = (data && data.id) ? data.id : null;
    this.label = (data && data.label) ? data.label : null;
  }
}
