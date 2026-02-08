import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BlogPostTs } from '../services/blog-post';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-blogpost-component',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './add-blogpost-component.html',
  styleUrl: './add-blogpost-component.scss',
})
export class AddBlogpostComponent {

  blogPostForm; 

  constructor(private fb: FormBuilder, private blogPostService : BlogPostTs, private router : Router) {

    this.blogPostForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    content: ['', [Validators.required, Validators.minLength(10)]],
  });

  }

  submit(): void {
    if (this.blogPostForm.invalid) {
      this.blogPostForm.markAllAsTouched();
      return;
    }

    const blogPost = this.blogPostForm.getRawValue();
    console.log('Blog post to create:', blogPost);

    // Appel API ici
    const {title, content} = blogPost

    this.blogPostService.createPost(title, content).subscribe({
      next : data => {
        this.router.navigate(["/posts"])
      },
      error : () => {

      }
    })

  }
}
 