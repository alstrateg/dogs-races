import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EditDogComponent } from './edit-dog.component';
import { ListDogsComponent } from './list-dogs.component';
import { InfoComponent } from './info.component';
import { HttpClientModule } from '@angular/common/http';
import { DogsService } from './dogs-races.service';
import { FormsModule }   from '@angular/forms';
import { RemoveDogComponent } from './remove-dog.component';

const appRoutes: Routes = [
  { path: 'dogs/new', component: EditDogComponent },
  { path: 'dogs/edit/:id', component: EditDogComponent },
  {
    path: 'dogs',
    component: ListDogsComponent,
    data: { title: 'Dogs List' }
  },
  { path: '', component: InfoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    EditDogComponent,
    ListDogsComponent,
    RemoveDogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
