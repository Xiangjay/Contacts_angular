import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { TagNewComponent } from './tag-new/tag-new.component';
import { MainComponent } from './main/main.component';

//请求模块和拦截模块
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
//引入自定义的拦截器，用于在发请求的时候在头部添加X-Access-Token以获取后台数据
import { GlobalInterceptor } from './global.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    NavbarComponent,
    SlidebarComponent,
    ContactListComponent,
    ContactEditComponent,
    ContactNewComponent,
    TagListComponent,
    TagEditComponent,
    TagNewComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //拦截器
    { provide: HTTP_INTERCEPTORS, 
      useClass: GlobalInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
