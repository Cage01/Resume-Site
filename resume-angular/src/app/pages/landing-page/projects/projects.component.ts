import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projects: any[];

  ngOnInit() {
    this.projects = [{
        title: "Eva Concierge",
        description: "",
        dateCreated: "2018",
        image: "../../assets/evaconcierge.PNG",
        link: "https://evaconcierge.ai"
    }, {
        title: "Pulse Music",
        description: "",
        dateCreated: "2017",
        image: "../../assets/pulsemusic.PNG",
        link: "https://pulsemusic.io/test"
    }, {
        title: "Four.oh",
        description: "",
        dateCreated: "2016",
        image: "../../assets/fouroh.png",
        link: "https://github.com/Cage01/Four.oh"
    }, {
        title: "ZerO Player",
        description: "",
        dateCreated: "2015",
        image: "../../assets/zeroplayer.png",
        link: "https://github.com/Cage01/Zer0-Player"
    }];
  }

}
