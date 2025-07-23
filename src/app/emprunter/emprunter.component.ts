import { Component } from '@angular/core';
import { Emprunt } from '../models/emprunt.model';
import { EmpruntService } from '../emprunt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprunter',
  templateUrl: './emprunter.component.html',
  styleUrls: ['./emprunter.component.css']
})
export class EmprunterComponent {
  emprunt: Emprunt = new Emprunt();
  dateRetourError: boolean = false;

  constructor(private empruntService: EmpruntService, private router: Router) {}

  onSubmit(): void {
    this.dateRetourError = false;

 
    if (!this.emprunt.prenom || !this.emprunt.nom || !this.emprunt.dateEmprunt || !this.emprunt.dateRetour) {
      return;
    }

    
    if (new Date(this.emprunt.dateRetour) < new Date(this.emprunt.dateEmprunt)) {
      this.dateRetourError = true;
      return;
    }

    
    this.empruntService.addEmprunt(this.emprunt).subscribe({
      next: () => {
      
        this.router.navigate(['/liste-des-livres']);
      },
      error: (err) => {
        console.error('Error adding emprunt:', err);
      }
    });
  }
}
