import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  summary: string[] = [];


  constructor(
    private auth: AuthService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['contacts']);
    }
  }


  onSubmit(form: NgForm) {
    this.summary = [];
    const formValues = form.value;
    const payload = {
      username: formValues.username,
      password: formValues.password
    };

    this.api.post('authenticate', payload)
      .subscribe(data => {
        this.auth.setToken(data.token);
        this.router.navigate(['/contacts']);
      }, (err) => {
        console.log('%c ERROR:', 'font-size:36px', err.error);
        this.summary.push(JSON.parse(err.error._body).error);
      });



  }




}
