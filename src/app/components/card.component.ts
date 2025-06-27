import { Component, OnInit } from '@angular/core';
import { TargetService } from '../services/target.service';


@Component({
  selector: 'app-card',
  standalone: false,
  template: `
    <div class="card">
      <h3>{{ content?.title }}</h3>
      <p>{{ content?.description }}</p>
    </div>
  `
})
export class CardComponent implements OnInit {
  content: any = { title: 'Default Card Title', description: 'Default card text' };

  constructor(private targetService: TargetService) {}  // ✅ This is important

  ngOnInit() {
    this.targetService.getOffer('card-scope').subscribe((data: any) => {
      if (data) this.content = data;
    });
  }
}

