import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public blogs : Blog[] = [];

  constructor(private http: HttpClient) { 
    this.getBlogs(); 
    console.log("API CALL");
    
  }

  // Fucntion to add a blog 
  public addBlog(blog: Blog){
    console.log("adding here");
    
    this.blogs.push(blog);
    console.log(blog);
  }

  // Function to get the blog from the API 
  getBlogs(){
    this.http.get('https://run.mocky.io/v3/ed9f6d30-ef05-4afd-a282-210b2f4e9385').pipe(catchError(this.handleError)).subscribe(
      (val: Blog[])=>{
        this.blogs = val;
      }
    ); 
  }

  // Function to handle the error 
  handleError(error: Response | any){
    console.log('ApiService::handleError', error);
    return null;
  }

  // Getter method to acquire a single blog entry 
  public getBlog(id: number){
    
    this.http.get('https://run.mocky.io/v3/ed9f6d30-ef05-4afd-a282-210b2f4e9385').subscribe(
      (res: Blog[]) => {
        for(var i = 0 ; i < this.blogs.length ; i++){
          if(id === this.blogs[i].id){
            return this.blogs[i]; 
          }
        }
      }
    );
  }

  // Function to edit a blog 
  editBlog(blog: Blog){
    for(var i = 0 ; i < this.blogs.length ; i++){
      if(blog.id === this.blogs[i].id){ // Found 
        console.log("Found here at " + (i+1));
        console.log("blog id is " + blog.id);
        console.log(this.blogs[i].title);
      
        this.blogs[i].title = blog.title ; 
        this.blogs[i].imageUrl = blog.imageUrl ;
        this.blogs[i].description = blog.description ; 
        this.blogs[i].date = blog.date ; 
      }
    }
  }
  
}
