import { Component } from '@angular/core';
import {Album} from "../../models/album";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../../Services/album-service.service";

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.css']
})
export class ListPhotosComponent {
  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const albumId = +this.route.snapshot.paramMap.get('id')!;
    this.album = this.albumService.getAlbums().find(a => a.id === albumId)!;
  }
}
