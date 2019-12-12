import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm : FormGroup;
  file : File;
  preview : string;

  constructor(private formBuilder: FormBuilder,private photoService:PhotoService,private route: Router) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['',Validators.required],
      description : ['', Validators.maxLength(300)],
      allowComments:[true]
    })
  }


  upload(){
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    this.photoService
      .upload(description,allowComments,this.file)
      .subscribe( ()=> this.route.navigate(['']));

  }

  //convertendo uri de envio para base64
  handleFile(file :File){
    this.file = file;
    const fileReader = new FileReader();
    fileReader.onload = (event:any) => this.preview = event.target.result;
    fileReader.readAsDataURL(file); //assync
    
  }
}

  