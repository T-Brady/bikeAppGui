import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    username?:string;
    constructor(
        private cookieService: CookieService
    ) {}
    ngOnInit() {
        const cookie = this.cookieService.get('bikeCookie');
        const jsonCookie = JSON.parse(cookie);
        this.username = jsonCookie.username;
        
    }
}