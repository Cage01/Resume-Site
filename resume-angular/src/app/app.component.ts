import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {TweenMax, Expo, Power2} from "gsap/TweenMax";

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

    constructor(private router: Router) { }

    title = 'Mason Richardson';
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

    mailText: string = "";


    ngOnInit() {
        this.mailText = "mailto:mason.p.richardson@gmail.com?subject=I saw your website!";

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }


    SendEmail(): void {
        this.mailText = "mailto:mason.p.richardson@gmail.com?subject=I saw your website!";
        window.location.href = this.mailText;
    }

    fadeOut(): void {
        TweenMax.to(".myBtn", 1, {
            y: -100,
            opacity: 0
        });

        TweenMax.to(".screen", 2, {
            y: -400,
            opacity: 0,
            ease: Power2.easeInOut,
            delay: 2
        });

        TweenMax.from(".overlay", 2, {
            ease: Power2.easeInOut
        });

        TweenMax.to(".overlay", 2, {
            delay: 2.6,
            top: "-110%",
            ease: Expo.easeInOut
        });

        TweenMax.to(".overlay-2", 2, {
            delay: 3,
            top: "-110%",
            ease: Expo.easeInOut
        });

        TweenMax.from(".content", 2, {
            delay: 3.2,
            opacity: 0,
            ease: Power2.easeInOut
        });


        TweenMax.to(".content", 2, {
            opacity: 1,
            y: 0,
            delay: 3.2,
            ease: Power2.easeInOut
        });

        setTimeout(function () {
            var element = document.getElementById("body");
            element.classList.remove("no-scroll");
        }, 3500);
    }


}

