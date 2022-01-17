export class TotalPrestatairesVM {
  nombrePrestataires: number;

  constructor(data?: TotalPrestatairesVM){
    this.nombrePrestataires = (data && data.nombrePrestataires) ? data.nombrePrestataires : 0;
  }
}