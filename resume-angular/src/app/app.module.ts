import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResumeComponent } from './pages/resume/resume.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    LandingPageComponent,
    
    //ExampleDialogComponent //DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  entryComponents: [
    LandingPageComponent
  ],
})
export class AppModule { }
