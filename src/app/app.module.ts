import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { AboutService } from 'src/services/about.service';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryService } from 'src/services/gallery.service';

const routes:Routes= [
  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'', redirectTo:'/about', pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    AboutService,
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
