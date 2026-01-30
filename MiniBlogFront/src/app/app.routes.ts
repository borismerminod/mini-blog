import { Routes } from '@angular/router';
import { AllBlogpostComponent } from './all-blogpost-component/all-blogpost-component';
import { AddBlogpostComponent } from './add-blogpost-component/add-blogpost-component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: 'posts', component: AllBlogpostComponent },
  { path: 'posts/create', component: AddBlogpostComponent },
  { path: '**', redirectTo: 'posts' },
  
];
