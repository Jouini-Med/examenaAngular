import { Auteur } from './auteur.model';

export class Livre {
  id!: string;
  titre!: string;
  annee!: number;
  auteur: Auteur = new Auteur();
  disponible: boolean = true;
}
