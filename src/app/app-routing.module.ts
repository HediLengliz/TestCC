import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {AlbumsComponent} from "./Components/albums/albums.component";
import {NotFoundComponent} from "./Components/not-found/not-found.component";
import {NavBarComponent} from "./Components/nav-bar/nav-bar.component";
import {AddAlbumComponent} from "./Components/add-album/add-album.component";
import {ListPhotosComponent} from "./Components/list-photos/list-photos.component";

const routes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  {path:'',redirectTo:'/albums',pathMatch:'full'},
  { path: 'add-album', component: AddAlbumComponent },
  { path: 'list-photos/:id', component: ListPhotosComponent },

  {path:'**',component:NotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
