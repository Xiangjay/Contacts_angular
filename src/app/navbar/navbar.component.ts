import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = JSON.parse(window.localStorage.getItem("contact_userInfo") || "{}")

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.http.delete("http://localhost:3000/session")
    .toPromise()
    .then(data=>{
      window.localStorage.removeItem("contact_token");
      window.localStorage.removeItem("contact_userInfo");
      this.router.navigate(["/login"])
    })
    .catch(err=>{
      window.alert("Logout failed")
    })
  }
}
