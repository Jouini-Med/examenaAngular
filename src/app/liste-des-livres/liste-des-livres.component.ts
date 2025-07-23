import { Component } from '@angular/core';

interface Livre {
  titre: string;
  auteur: string;
  annee: number;
  disponible: boolean;
}

@Component({
  selector: 'app-liste-des-livres',
  templateUrl: './liste-des-livres.component.html',
  styleUrls: ['./liste-des-livres.component.css']
})
export class ListeDesLivresComponent {
  livres: Livre[] = [
    { titre: 'Les Misérables', auteur: 'Victor Hugo', annee: 1862, disponible: true },
    { titre: 'Orgueil et Préjugés', auteur: 'Jane Austen', annee: 1813, disponible: true }
  ];

  emprunterLivre(livre: Livre): void {
    if (livre.disponible) {
      livre.disponible = false;
    }
  }
}
