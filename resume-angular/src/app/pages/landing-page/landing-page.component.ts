import { Component, OnInit, NgZone } from '@angular/core';
import { Chart } from 'chart.js';
import { load } from 'recaptcha-v3';
import { RequestService } from 'src/app/services/request.service';

declare let window: any


@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})


export class LandingPageComponent implements OnInit {

    constructor(private request: RequestService) { }

    projects: any[];

    ngOnInit() {

        //Init Charts
        this.init_skillRadarChart();

        this.display_projects();



    }

    goToLink(link): void {
        window.open(link, "_blank");
    }

    sendMessage(formData: any): void {

        //load('6LeAeN8UAAAAAIf7nokXrqnqgeYxb7efBsvlD4r1').then((recaptcha) => {
        //    recaptcha.execute('login').then((token) => {
              this.request.sendMessage(formData).subscribe(data => {
                //if Good?

              })

        //    }).catch(console.error)
        //  }).catch(console.error)
    }

    icon(iconID): void {
        switch (iconID) {
            case 0:
                window.open("https://www.linkedin.com/in/mason-richardson-zerotek/", "_blank");
                break;
            case 1:
                window.open("https://github.com/Cage01", "_blank");
                break;
            case 2:
                let mailText = "mailto:mason.p.richardson@gmail.com+?subject=I saw your website!"; // add the links to body
                window.location.href = mailText;
                break;
            case 3:
                break;
            default:
                break;
        }
    }


    display_projects(): void {
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

    init_skillRadarChart(): void {
        let canvas: any = document.getElementById("canvas");

        let gradientBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
        gradientBlue.addColorStop(0, 'rgba(44, 108, 140, 0.4)'); //Dont like this color for the radar chart
        gradientBlue.addColorStop(1, 'rgba(44, 108, 140, 0.5)');

        let gradientHoverBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
        gradientHoverBlue.addColorStop(0, 'rgba(65, 65, 255, 1)');
        gradientHoverBlue.addColorStop(1, 'rgba(131, 125, 255, 1)');


        let redArea = null;
        let blueArea = null;

        let shadowed = {
            beforeDatasetsDraw: function (chart, options) {
                chart.ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
                chart.ctx.shadowBlur = 40;
            },
            afterDatasetsDraw: function (chart, options) {
                chart.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                chart.ctx.shadowBlur = 0;
            }
        };


        window.chart = new Chart(document.getElementById("canvas"), {
            type: "radar",
            data: {
                labels: ["Design", "Algorithms", "Front-End", "Back-End", "Databases", "Data Structures"],
                datasets: [{
                    data: [90, 85, 90, 100, 83, 85],
                    fill: true,
                    backgroundColor: gradientBlue,
                    borderColor: "transparent",
                    pointBackgroundColor: "transparent",
                    pointBorderColor: "transparent",
                    pointHoverBackgroundColor: "transparent",
                    pointHoverBorderColor: "transparent",
                    pointHitRadius: 50,
                }]
            },
            options: {
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                    custom: function (tooltip) {
                        let tooltipEl = document.getElementById('tooltip');
                        if (tooltip.body) {
                            tooltipEl.style.display = 'block';
                            if (tooltip.body[0].lines && tooltip.body[0].lines[0]) {
                                tooltipEl.innerHTML = tooltip.body[0].lines[0];
                            }
                        } else {
                            // setTimeout(function () {
                            //     tooltipEl.style.display = 'none';
                            // }, 500);
                        }
                    },
                },
                gridLines: {
                    display: true,
                    color: "#FFFFF"
                },
                scale: {
                    pointLabels: {
                        fontSize: 12
                    },
                    ticks: {
                        maxTicksLimit: 1,
                        display: false,
                    },
                    angleLines: {
                        color: '#777777'
                    },
                    gridLines: {
                        color: '#858585'
                    }
                }
            },
            plugins: [shadowed]
        });
    }
}


