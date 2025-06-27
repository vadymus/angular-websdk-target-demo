import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner.component';
import { CardComponent } from './components/card.component';
import { TargetService } from './services/target.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardComponent
  ],
  imports: [BrowserModule],
  providers: [TargetService],
  bootstrap: [AppComponent]
})
export class AppModule {}