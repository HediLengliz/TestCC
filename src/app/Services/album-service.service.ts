import { Injectable } from '@angular/core';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private albums: Album[] = [];
  private nextId = 1;

  addAlbum(album: Album) {
    album.id = this.nextId++;
    album.creationDate = new Date();
    album.archived = 0;
    this.albums.push(album);
  }

  getAlbums() {
    return this.albums.filter(album => album.archived === 0);
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(album => album.id !== id);
  }
}
