import { PrestataireDetailsVM } from "src/prestataire/vm/prestataire-vm";
import {  QuartierEssentielVM } from "src/quartier/vm/quartier-vm";
import { VilleEssentielVM } from "src/ville/vm/ville-vm";

export class CommuneDetailsVM {
  id: string;
  label: string;
  ville: VilleEssentielVM;
  prestataires: Array<PrestataireDetailsVM>;
  quartiers: Array<QuartierEssentielVM>;

  constructor(data?: CommuneDetailsVM) {
    this.id = (data && data.id) ? data.id : null;
    this.label = (data && data.label) ? data.label : null;
    this.ville = (data && data.ville) ? new VilleEssentielVM(data.ville) : new VilleEssentielVM();
    this.prestataires = (data && data.prestataires) ? data.prestataires : [];
    this.quartiers = (data && data.quartiers) ? data.quartiers : [];
  }
}

export class CommuneEssentielVM {
  id: string;
  label: string;

  constructor(data?: CommuneEssentielVM) {
    this.id = (data && data.id) ? data.id : null;
    this.label = (data && data.label) ? data.label : null;
  }
}