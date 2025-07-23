import { Component } from '@angular/core';

interface Auteur {
  nom: string;
  nationalite: string;
}

@Component({
  selector: 'app-liste-des-auteurs',
  templateUrl: './liste-des-auteurs.component.html',
  styleUrls: ['./liste-des-auteurs.component.css']
})
export class ListeDesAuteursComponent {
  auteurs: Auteur[] = [
    { nom: 'Victor Hugo', nationalite: 'Française' },
    { nom: 'Jane Austen', nationalite: 'Anglaise' }
  ];
}
