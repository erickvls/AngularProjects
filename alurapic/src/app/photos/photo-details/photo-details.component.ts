import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";
import { Observable } from "rxjs";
import { PhotoComment } from "../photo/photo-comment";
import { AlertService } from "src/app/shared/components/alert/alert.service";
import { routerNgProbeToken } from "@angular/router/src/router_module";

@Component({
    templateUrl:'../photo-details/photo-details.component.html'  
})
export class PhotoDetailsComponent implements OnInit{
    
    photo$: Observable<Photo>;
    
    constructor(private route:ActivatedRoute,private photoService: PhotoService, private router: Router, private alertSergice: AlertService){}
     // ACTIVATED ROUTE PEGA  O PARAMETRO QUE TA SENDO PASSADO PELA URL 
    

    ngOnInit(): void {
        const idPhoto = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(idPhoto);
        this.photo$.subscribe( () =>{}, err=>{
            this.router.navigate(['not-found']);
        });
    }

    remove(photoId:number){
          
        this.photoService.removePhoto(photoId)
        .subscribe( 
            ()=> {
                this.alertSergice.success("Photo removed!");
                this.router.navigate([''])
            },
            err => {
                this.alertSergice.warning("Could not delete the photo!");
            }
        );
        
    }


    like(photo: Photo){
        this.photoService
            .like(photo.id)
            .subscribe(liked=>{
                if(liked){
                    this.photo$ = this.photoService.findById(photo.id);
                }
            })
    }
}