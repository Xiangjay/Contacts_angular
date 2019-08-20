import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = {
    email:'',
    password:''
  }
  errMsg:string = '';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.http.post("http://localhost:3000/session",this.loginForm).toPromise().then((data:any)=>{
      window.localStorage.setItem("contact_token",data.token);
      window.localStorage.setItem("contact_userInfo",JSON.stringify(data.user));
      this.router.navigate(["/"]);
    }).catch(err=>{
      if(err.status === 401){
        this.errMsg = 'Invalid email or password, please try again'
      }
    })
  }
}
