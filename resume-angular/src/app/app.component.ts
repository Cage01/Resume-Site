import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

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
}
