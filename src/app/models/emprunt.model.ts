import { Livre } from './livre.model';

export class Emprunt {
  id!: string;
  prenom!: string;
  nom!: string;
  livre: Livre = new Livre();
  dateEmprunt!: string;
  dateRetour!: string;
}
