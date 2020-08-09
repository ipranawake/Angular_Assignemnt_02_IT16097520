import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Blog } from '../models/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  // blogs: Blog[] = null; 

  constructor(public blogsService: BlogService, public router: Router){ }

  ngOnInit(): void { // Life cycle hook - Triggers when the component is created 
    // To do on initialization 
    // this.blogs = this.blogsService.blogs
  }

  // Delete blog function as instructed in the webinar by "Malinda Ranasinghe"
  deleteBlog(blog: Blog){
    this.blogsService.blogs = this.blogsService.blogs.filter((b) => {
      if(b != blog){
        return b;
      }
    });
    console.log(this.blogsService.blogs);
  }

  // Fucntion to view a blog 
  viewBlogOnClick(id: number){
    this.router.navigate(['view-blog', id]);  
  }

  // Fucntion to create a blog 
  createBlogOnClick(){
    this.router.navigate(['create-blog']);
  }
}
