import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm = {
    email:'',
    password:''
  }

  emailPass:boolean = true;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // emailCheck(){
  //   let formData = this.signinForm;
  //   this.http.post("http://localhost:3000/users/checkEmail",formData).toPromise().then((data)=>{
  //     this.emailPass = true;
  //   }).catch(err=>{
  //     if(err.status === 409){
  //       this.emailPass = false;
  //     }
  //   })
  // }

  signin() {
    let formData = this.signinForm;
    this.http.post("http://localhost:3000/users/",formData).toPromise().then((data:any)=>{  //这里在data后面加上类型any，编译的时候才不会报错，如果不加的话也不影响程序运行
      this.emailPass = true;
      //把返回的 token 存到 localStorage 中去
      window.localStorage.setItem("contact_token",data.token);
      window.localStorage.setItem("contact_userInfo",JSON.stringify(data.user));
      this.router.navigate(["/"]);
    }).catch(err=>{
      if(err.status === 409){
        this.emailPass = false;
      }
    })
  }

}
