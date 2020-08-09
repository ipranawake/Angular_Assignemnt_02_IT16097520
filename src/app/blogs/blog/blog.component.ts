import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blog; 
  @Output() deleteBlogEvent = new EventEmitter();
  blogs = null; 

  constructor(private blogsService: BlogService, public router: Router) { }

  ngOnInit(): void { 
    this.blogs = this.blogsService.blogs; 
  }

  // Delete blog function as instructed in the webinar by "Malinda Ranasinghe"
  deleteBlog(){
    this.deleteBlogEvent.emit();
  }

  // Delete blog function 
  removeBlog(blog){
    const i: number = this.blogs.indexOf(blog);
    if(i !== -1){
      this.blogs.splice(i,1);
    }
  }

  // Function to change the icon style
  setColor(index, blog){
    let styles;

    if(blog.rating ==  0){
      styles = {
        'margin-left': '5px', 
        'color': 'lightGray'
      }
    }else if(index <=  blog.rating){
      styles = {
        'margin-left': '5px', 
        'color': 'orange'
      }
    }else {
      styles = {
        'margin-left': '5px', 
        'color': 'lightGray'
      }
    }

    return styles;
  }

  // Function to change rating 
  setRating(rating, blog){
    blog.rating = rating ;
    console.log(blog.rating); 
  }

  // Function to edit a blog 
  editBlog(id: number){
    this.router.navigate(['edit-blog', id]);  
  }

  // Fucntion to edit a blog on click event 
  editBlogOnClick(){
    this.router.navigate(['edit-blog']);
  }
}
