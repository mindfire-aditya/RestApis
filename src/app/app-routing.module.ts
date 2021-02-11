import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent , pathMatch: 'full'},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserDetailsComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'comments', component: CommentsComponent},
  { path: 'todos', component: TodosComponent}, 
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [
  UsersComponent, 
  UserDetailsComponent,
  PostsComponent, 
  CommentsComponent, 
  TodosComponent,
  PageNotFoundComponent
];