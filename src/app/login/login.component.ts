import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Subscription } from "rxjs";
import { AppService } from "./app.service";

@Component({
    templateUrl: './login.component.html',
    selector: 'app-login'
})
export class LoginComponent {
    private $login?: Subscription;
    form: FormGroup;
    isLoading = false;
    errorMessage?: string;

    constructor(
        private fb: FormBuilder,
        private appService: AppService,
        private router: Router,
        private cookieService: CookieService

    ) {
    this.form = this.fb.group(
    {
        username: [null, Validators.required],
        password: [null, Validators.required]
    }
    );
    }


    submit() {
        // console.log(this.form.get('usernam);
        this.isLoading = true;
        this.errorMessage = undefined; 
        const params = this.form.value;
        this.$login = this.appService.loginUser(params).subscribe(( data:any) => {
            console.log(data)
            this.cookieService.set('bikeCookie', JSON.stringify(data), undefined, '/', 'localhost', false, 'Lax');
            setTimeout(() => {
                this.isLoading = false;
                this.form.reset();
                this.router.navigateByUrl('/dashboard');
            }, 1500)
        }, (e)=>{
            this.isLoading = false;
            this.errorMessage = "Login Failed";
            this.form.reset();
        });
        
    }
    
}