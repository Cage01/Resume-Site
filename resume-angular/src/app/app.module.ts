import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResumeComponent } from './pages/resume/resume.component';
import { OldLandingPageComponent } from './pages/old-land/landing-page.component';
import { FormsModule } from '@angular/forms';
import { LandingPageModule } from './pages/landing-page/landing-page.module'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    OldLandingPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    LandingPageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  entryComponents: [
    OldLandingPageComponent
  ],
})
export class AppModule { }
