import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
      LandingPageComponent,
      ContactFormComponent,
      HeaderComponent,
      ExperienceComponent,
      AboutMeComponent,
      ProjectsComponent,
      SkillsComponent
    ]
})
export class LandingPageModule { }
