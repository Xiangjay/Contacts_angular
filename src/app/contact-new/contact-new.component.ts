import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {
  newContact = {
    name:'',
    email:'',
    phone:''
  }
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addContact(){
    this.http.post("http://localhost:3000/contacts",this.newContact).toPromise().then(data=>{
      this.router.navigate(["/contact"]);
    }).catch(err=>{
      console.log(err)
    })
  }

}
