import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombreLivres: number = 0;
  nombreAuteurs: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.nombreLivres = 2;
    this.nombreAuteurs = 2;
  }
}
