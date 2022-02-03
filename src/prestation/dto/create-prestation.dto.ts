export class CreatePrestationDto {
  label: string;
  imageUrl?: string;

  constructor(data?: CreatePrestationDto) {
    this.label = (data && data.label) ? data.label : null;
    this.imageUrl = (data && data.imageUrl) ? data.imageUrl : null;
  }
}
