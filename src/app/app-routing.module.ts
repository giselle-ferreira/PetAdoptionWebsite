import { NgoCarouselComponent } from './ngo-carousel/ngo-carousel.component';
import { HowDoesItWorkComponent } from './how-does-it-work/how-does-it-work.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { BeforeAdoptingComponent } from './before-adopting/before-adopting.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'calltoaction', component: CallToActionComponent
  },
  {
    path: 'howdoesitwork', component: HowDoesItWorkComponent
  },
  {
    path: 'ngo', component: NgoCarouselComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'beforeadopting', component: BeforeAdoptingComponent
  },
  {
    path: 'footer', component: FooterComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
