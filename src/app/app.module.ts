import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import {APP_BASE_HREF} from '@angular/common';
import {RestService} from './rest.service';
import { ModalComponent } from './modal/modal.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )

    /*routing
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )*/
  ],
  /*providers: [{provide: APP_BASE_HREF, useValue : '/' }], */
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
