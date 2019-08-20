import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//登录拦截（只是通过token验证是否登录了）
import { AuthGuard } from './auth-guard.service';

import { SigninComponent } from './signin/signin.component'
import { LoginComponent } from './login/login.component'
import { MainComponent } from './main/main.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { TagNewComponent } from './tag-new/tag-new.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: MainComponent,
    //登录拦截
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ContactListComponent
      },
      {
        path: 'edit/:id', //动态路径
        component: ContactEditComponent
      },
      {
        path: 'new',    // /contact/new
        component: ContactNewComponent
      }
    ]
  },
  {
    path: 'tag',
    component: MainComponent,
    //登录拦截
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TagListComponent
      },
      {
        path: 'edit',
        component: TagEditComponent
      },
      {
        path: 'new',
        component: TagNewComponent
      }
    ]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
