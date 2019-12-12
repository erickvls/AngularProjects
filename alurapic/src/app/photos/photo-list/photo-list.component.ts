import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  userName: string ='';
  currentPage : number = 1;
  hasMore: boolean = true;

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute){
  }
  
  ngOnInit():void{
    
    this.activatedRoute.params.subscribe( params =>{
      this.userName = params.userName;
      this.photoService.listfromUserPaginated(this.userName,1).subscribe(photos=>this.photos = photos);
    })
  }
  
  load(){
    this.photoService
        .listfromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos=> {
          this.photos.push(... photos);
          if(!photos.length){
            this.hasMore = false;
          }
        })
  }

}
