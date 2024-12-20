import {Component, OnInit} from '@angular/core';
import {AlbumService} from "../../Services/album-service.service";
import {Album} from "../../models/album";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id);
    this.albums = this.albumService.getAlbums();
  }

}
