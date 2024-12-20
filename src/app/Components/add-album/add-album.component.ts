import { Component } from '@angular/core';
import { AlbumService } from 'src/app/Services/album-service.service'
import {Album} from "../../models/album";
import {DefaultValueAccessor, FormControl, FormGroup, Validators} from "@angular/forms";
import {getLocaleDateFormat} from "@angular/common";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";


@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
  album : FormGroup = new FormGroup({
    title: new FormControl("",[Validators.required, Validators.minLength(3)]),
    creationDate : new FormControl("",[Validators.required]),
    archived : new  FormControl ([0]),
    coverPicture : new FormControl ("",[Validators.minLength(5)]),

  })
  get title(){
    return this.album.get('title');
  }
  get creationDate(){
      return this.album.get('creationDate')
  }
  get archived(){
    return this.album.get('archived')
  }
  get coverPicture(){
    return this.album.get('coverPicture')
  }
  get photos(){
    return this.album.get('photos')
  }


  addAlbum() {
    console.log(this.album.value);
    alert('Album ajouté avec succès !');
  }
  protected readonly Album = Album;

}
