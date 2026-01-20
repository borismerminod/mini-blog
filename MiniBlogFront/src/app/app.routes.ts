import { Routes } from '@angular/router';
import { AllBlogpostComponent } from './all-blogpost-component/all-blogpost-component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: 'posts', component: AllBlogpostComponent },
  { path: '**', redirectTo: 'posts' }
];
