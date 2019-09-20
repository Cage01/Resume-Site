import { Component, OnInit, NgZone } from '@angular/core';
import { Chart } from 'chart.js';

declare let window: any


@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})


export class LandingPageComponent implements OnInit {

    constructor() { }

    ngOnInit() {

        //Init Charts
        this.init_leftChart();
        this.init_rightChart();
        this.init_skillRadarChart();

    }

    icon(iconID) {
        switch (iconID) {
            case 0:
                window.open("https://www.linkedin.com/in/mason-richardson-zerotek/", "_blank");
                break;
            case 1:
                window.open("https://github.com/Cage01", "_blank");
                break;
            case 2:
                var mailText = "mailto:mason.p.richardson@gmail.com+?subject=I saw your website!"; // add the links to body
                window.location.href = mailText;
                break;
            case 3:
                break;
            default:
                break;
        }
    }




    init_skillRadarChart() {
        var canvas: any = document.getElementById("canvas");

        var gradientBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
        gradientBlue.addColorStop(0, 'rgba(44, 108, 140, 0.4)'); //Dont like this color for the radar chart
        gradientBlue.addColorStop(1, 'rgba(44, 108, 140, 0.5)');

        var gradientHoverBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
        gradientHoverBlue.addColorStop(0, 'rgba(65, 65, 255, 1)');
        gradientHoverBlue.addColorStop(1, 'rgba(131, 125, 255, 1)');


        var redArea = null;
        var blueArea = null;

        var shadowed = {
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
                    data: [100, 65, 90, 100, 80, 70],
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
                        var tooltipEl = document.getElementById('tooltip');
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

    init_leftChart() {
        //Set Context
        var chart: any = document.getElementById("chart-left");
        var ctx = chart.getContext("2d"), gradient = ctx.createLinearGradient(0, 0, 0, 450);

        //Gradient
        gradient.addColorStop(0, 'rgba(44, 108, 140, 0.5)');
        gradient.addColorStop(0.5, 'rgba(36, 59, 85, 0.25)');
        gradient.addColorStop(1, 'rgba(36, 59, 85, 0)');

        var options = {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                easing: 'easeInOutQuad',
                duration: 520
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(200, 200, 200, 0.05)',
                        lineWidth: 1
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: 'rgba(200, 200, 200, 0.08)',
                        lineWidth: 1
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0.4
                }
            },
            legend: {
                display: false
            },
            point: {
                backgroundColor: 'white'
            },
            tooltips: {
                titleFontFamily: 'Lato',
                backgroundColor: 'rgba(0,0,0,0.3)',
                titleFontColor: 'red',
                caretSize: 5,
                cornerRadius: 2,
                xPadding: 10,
                yPadding: 10
            }
        };

        //Set Data
        var data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Custom Label Name',
                backgroundColor: gradient,
                pointBackgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#243b55',
                data: [50, 55, 80, 81, 54, 50]
            }]
        };

        //Init Chart
        new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    }

    init_rightChart() {
        //Set Context
        var chart: any = document.getElementById("chart-right");
        var ctx = chart.getContext("2d"), gradient = ctx.createLinearGradient(0, 0, 0, 450);

        //Gradient
        gradient.addColorStop(0, 'rgba(44, 108, 140, 0.5)');
        gradient.addColorStop(0.5, 'rgba(36, 59, 85, 0.25)');
        gradient.addColorStop(1, 'rgba(36, 59, 85, 0)');

        //Chart Options
        var options = {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                easing: 'easeInOutQuad',
                duration: 520
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(200, 200, 200, 0.05)',
                        lineWidth: 1
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: 'rgba(200, 200, 200, 0.08)',
                        lineWidth: 1
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0.4
                }
            },
            legend: {
                display: false
            },
            point: {
                backgroundColor: 'white'
            },
            tooltips: {
                titleFontFamily: 'Lato',
                backgroundColor: 'rgba(0,0,0,0.3)',
                titleFontColor: 'red',
                caretSize: 5,
                cornerRadius: 2,
                xPadding: 10,
                yPadding: 10
            }
        };


        //Set Data
        var data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Custom Label Name',
                backgroundColor: gradient,
                pointBackgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#243b55',
                data: [50, 80, 65, 55, 54, 70]
            }]
        };

        //Init Chart
        new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });

    }


}


