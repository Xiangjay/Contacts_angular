import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  formData = {  //这里下面也可以不定义属性
    email:'',
    name:'',
    phone:'',
    id:''
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    //console.log(this.route)
    const contactId = this.route.snapshot.params.id;  //得到动态路由的 ID
    this.getContactById(contactId);
  }

  getContactById(id){ //初始化 form 内容
    this.http.get(`http://localhost:3000/contacts/${id}`).toPromise().then((data:any)=>{
      this.formData = data;
    }).catch(err=>{
      console.log(err);
    })
  }

  editContact(id){
    //const contactId = this.route.snapshot.params.id;
    //const contactId = this.formData.id;
    this.http.patch(`http://localhost:3000/contacts/${id}`,this.formData).toPromise().then(data=>{
      this.router.navigate(["/contact"])
    }).catch(err=>{
      console.log(err);
    })
  }
}
