import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { HeaderComponent } from './common/header/header.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { RouteConfigLoadEnd, Router, RouterModule } from '@angular/router';
import { BlogService } from './service/blog.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditBlogComponent } from './edit-blog/edit-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogComponent,
    HeaderComponent,
    CreateBlogComponent,
    ViewBlogComponent,
    EditBlogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'create-blog', component: CreateBlogComponent},
      {path: '', component: BlogsComponent},
      {path: 'view-blog/:id', component: ViewBlogComponent},
      {path: 'edit-blog/:id', component: EditBlogComponent}
    ])
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
