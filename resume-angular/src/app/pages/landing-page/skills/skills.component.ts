import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


declare let window: any

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


    labels = ["Angular 8", "AngularJS", "Java", "Python", "cSharp", "NodeJS"]
    skill =  [75, 90, 30, 55, 80, 100];
    //[75, 90, 40, 45, 80, 100]


    constructor() { }

    ngOnInit() {
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
                labels: this.labels,
                datasets: [{
                    data: this.skill,
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
