export class PrestationEssentielDto {
  id: string;
  label: string;
  imageUrl: string;
  totalPrestation: number;

  constructor(data?: PrestationEssentielDto) {
    this.id = (data && data?.id) ? data.id : null;
    this.label = (data && data?.label) ? data.label: null;
    this.imageUrl = (data && data?.imageUrl) ? data.imageUrl: null;
    this.totalPrestation = (data && data?.totalPrestation) ? data.totalPrestation: 0;
  }
}
