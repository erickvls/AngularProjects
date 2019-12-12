import { NgModel, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { PhotoFormComponent } from "./photo-form.component";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PhotoModule } from "../photo/photo.module";
import { ImmediateClickModule } from "../../shared/directives/immediate-click/immediate-click.module";

@NgModule({
    declarations: [PhotoFormComponent],
    imports:[VMessageModule,CommonModule,ReactiveFormsModule,RouterModule,PhotoModule,ImmediateClickModule]
})
export class PhotoFormModule{

}