import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts:any = []

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(){
    //封装成函数，便于删除联系人后更新列表
    this.http.get("http://localhost:3000/contacts")
    .toPromise()
    .then(data=>{
      this.contacts = data;
    })
    .catch(err=>{
      console.log(err);
    })
  }

  deleteContactbyId(id,e){
    e.preventDefault();
    if(!window.confirm("Confirm to delete the contact?")){
      return;
    }
    this.http.delete(`http://localhost:3000/contacts/${id}`).toPromise().then(data=>{
      this.getContacts();
    }).catch(err=>{
      console.log(err);
    })
  }

}
