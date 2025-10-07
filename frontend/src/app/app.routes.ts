import { Routes } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts';
import { PostDetailComponent } from './components/post-detail/post-detail'; // Make sure to import this

export const routes: Routes = [
    { path: '', component: ListPostsComponent },
    { path: 'posts/:id', component: PostDetailComponent } // Add this line
];