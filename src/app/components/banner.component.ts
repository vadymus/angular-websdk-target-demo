import { Component, OnInit } from '@angular/core';
import { TargetService } from '../services/target.service';

@Component({
  selector: 'app-banner',
  standalone: false,
  template: `
    <div class="banner">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
    </div>
  `
})
export class BannerComponent implements OnInit {
  title = 'Default Banner Title';
  message = 'Default banner message.';

  constructor(private targetService: TargetService) {}

  ngOnInit() {
    this.targetService.getOffer('banner-scope').subscribe((data: any) => {
      if (data) {
        this.title = data.title;
        this.message = data.message;
      }
    });
  }
}
