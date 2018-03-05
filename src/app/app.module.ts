import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {  HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TestbindingComponent } from './testbinding/testbinding.component';
import { NgcontenttestComponent } from './ngcontenttest/ngcontenttest.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupForm1Component } from './sign-upform1/signup-form1.component';
import { PostcomponentComponent } from './postcomponent/postcomponent.component';
import { Http } from '@angular/http';
import { PostService } from './services/post.service';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TestbindingComponent,
    NgcontenttestComponent,
    ContactFormComponent,
    SignupFormComponent,
    SignupForm1Component,
    PostcomponentComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
