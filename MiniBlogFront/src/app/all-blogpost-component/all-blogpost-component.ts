import { Component, OnInit } from '@angular/core';
import { BlogPost, BlogPostTs } from '../services/blog-post';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-blogpost-component',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './all-blogpost-component.html',
  styleUrl: './all-blogpost-component.scss',
})
export class AllBlogpostComponent {

  protected posts : BlogPost[]
  protected loading : Boolean
  protected error : String
  

  constructor(private blogPostService : BlogPostTs)
  {
    this.posts = []
    this.loading = false
    this.error = ""
  }

  ngOnInit()
  {
    this.blogPostService.getAllPosts().subscribe({
      next: data => {
        this.posts = data;
        this.loading = false;
        console.log(data)
      },
      error: () => {
        this.error = 'Impossible de charger les posts';
        this.loading = false;
      }
    });

    
  }

  debug()
  {
    console.log("HELLO")
  }
  

}
