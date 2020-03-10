import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OldLandingPageComponent } from './pages/old-land/landing-page.component';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


const routes: Routes = [
  { path:  '', component: OldLandingPageComponent },
  { path: 'landing', component: LandingPageComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      LandingPageModule
    ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
