import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

    constructor(private request: RequestService) { }

    showThanks: boolean;

    ngOnInit() {
    }

    sendMessage(formData: any): void {

        //load('6LeAeN8UAAAAAIf7nokXrqnqgeYxb7efBsvlD4r1').then((recaptcha) => {
        //    recaptcha.execute('login').then((token) => {
        this.request.sendMessage(formData.value).subscribe(data => {
            
            //Show thank you and reset
            this.showThanks = true;

            setTimeout(() => {
                this.showThanks = false;
            }, 5000)


            formData.resetForm();
        })

        //    }).catch(console.error)
        //  }).catch(console.error)
    }

}
