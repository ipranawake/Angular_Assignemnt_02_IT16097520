import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from '../service/blog.service';
import { Router } from '@angular/router';
import { Blog } from '../models/blog';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  currentBlog: Blog; 

  blogForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    date: new FormControl(),
    imageUrl: new FormControl(),
    description: new FormControl()
  });

  constructor(private blogService: BlogService, private router: Router, private activeRouter: ActivatedRoute, private http: HttpClient) { }

  // Function to submit the create blog info 
  onFormSubmit(){
    if(this.blogForm.valid){
      this.blogForm.controls.id.setValue(this.currentBlog.id);
      this.blogForm.controls.date.setValue(new Date());
      this.blogService.editBlog(this.blogForm.value);
      this.router.navigate(['']);
    }else{
      console.log(this.blogForm.valid);
    }
  }

  // Function to preview the  URL 
  get imageUrl(){
    return this.blogForm.value.imageUrl;
  }

  ngOnInit(): void {
    const id = +this.activeRouter.snapshot.paramMap.get('id'); // Adding the '+' sign will convert the string to a number 

    // Aquire all recordsa and find the matching Blog entry 
    this.http.get('https://run.mocky.io/v3/ed9f6d30-ef05-4afd-a282-210b2f4e9385').subscribe(
      (res: Blog[]) => {
        for(var i = 0 ; i < res.length ; i++){
          if(id === res[i].id){
            this.currentBlog = res[i] ; 
            console.log(this.currentBlog);
            
            break;
          }
        }
      }
    );
  }
}
