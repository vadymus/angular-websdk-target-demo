import { Component, OnInit } from '@angular/core';
import { TargetService } from './services/target.service';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <h1>Personalized Page</h1>
    <app-banner></app-banner>
    <app-card></app-card>
  `
})
export class AppComponent implements OnInit {
  constructor(private targetService: TargetService) {}

  ngOnInit() {
    this.targetService.loadOffers(['banner-scope', 'card-scope']);
  }
}

