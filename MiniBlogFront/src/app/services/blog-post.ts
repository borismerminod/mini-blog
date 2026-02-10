import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface BlogPost {
  id: number 
  title : string
  content: string
  createdAt: string
}

@Injectable({
  providedIn: 'root',
})
export class BlogPostTs {
  
  //private apiUrl = "https://localhost:7172/api/posts"
  //private apiUrl = "http://localhost:5211/api/posts"
  private apiUrl = "http://localhost:8090/api/posts"

  constructor(private http:HttpClient)
  {

  }

  public getAllPosts() : Observable<BlogPost[]>
  {
    return this.http.get<BlogPost[]>(this.apiUrl)
  }

  public createPost(title:string, content:string) : Observable<any>
  {
    return this.http.post(this.apiUrl, {title, content})
  }
  
}
