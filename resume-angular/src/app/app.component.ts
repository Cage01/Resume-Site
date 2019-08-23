import { Component, Inject } from '@angular/core';

export interface DialogData {
    animal: string;
    name: string;
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';



  animal: string;
  name: string;

  skills: any[] = [
    "UI/UX Design",
    "MySQL",
    "Digital Ocean",
    "AWS",
    "Linux",
    "Git Version Control",
    "Angular",
    "NodeJS",
    "REST API"
  ]

  mailText:string = "";


  ngOnInit(){
    this.mailText = "mailto:mason.p.richardson@gmail.com?subject=I saw your website!";
  }


  SendEmail(): void {
    this.mailText = "mailto:mason.p.richardson@gmail.com?subject=I saw your website!";
    window.location.href = this.mailText;
  }

  
}

