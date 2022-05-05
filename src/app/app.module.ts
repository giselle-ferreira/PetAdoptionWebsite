import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { HowDoesItWorkComponent } from './how-does-it-work/how-does-it-work.component';
import { NgoCarouselComponent } from './ngo-carousel/ngo-carousel.component';
import { BeforeAdoptingComponent } from './before-adopting/before-adopting.component';
import { AppRoutingModule } from './app-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { FeatherLinkedin, FeatherGithub  } from '@ng-icons/feather-icons';
import { BootstrapLinkedin, BootstrapGithub  } from '@ng-icons/bootstrap-icons';
import { SimpleLinkedin, SimpleGithub  } from '@ng-icons/simple-icons';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    CallToActionComponent,
    HowDoesItWorkComponent,
    NgoCarouselComponent,
    BeforeAdoptingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ FeatherLinkedin, FeatherGithub, BootstrapLinkedin, BootstrapGithub, SimpleLinkedin, SimpleGithub })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
