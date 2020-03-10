import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    private base: string = 'https://us-central1-resume-15a50.cloudfunctions.net/widgets';

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    constructor(private http: HttpClient) { }

    sendMessage(message: any): any {
        let url = this.base + '/newMessage'

        return this.http.post<any>(url, message, this.httpOptions);
    }

    updatePageViews(): void {
        let url = this.base + '/updatePageViews'

        //return this.http.get
    }

}
