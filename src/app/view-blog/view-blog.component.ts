import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../service/blog.service';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {
  currentBlog: Blog; 
  constructor(private activeRouter: ActivatedRoute, private blogService: BlogService, private http: HttpClient) { } 

  ngOnInit(): void {
    const id = +this.activeRouter.snapshot.paramMap.get('id'); // Adding the '+' sign will convert the string to a number 
    // Got the id at this point 

    // Aquire all records and find the matching Blog entry 
    this.http.get('https://run.mocky.io/v3/ed9f6d30-ef05-4afd-a282-210b2f4e9385').subscribe(
      (res: Blog[]) => {
        for(var i = 0 ; i < res.length ; i++){
          if(id === res[i].id){
            this.currentBlog = res[i] ; 
            break;
          }
        }
      }
    );
  }
}
