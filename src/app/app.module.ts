import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AddAlbumComponent } from './Components/add-album/add-album.component';
import { ListPhotosComponent } from './Components/list-photos/list-photos.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AlbumsComponent,
    NotFoundComponent,
    AddAlbumComponent,
    ListPhotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
