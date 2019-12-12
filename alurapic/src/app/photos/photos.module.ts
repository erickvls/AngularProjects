import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from "@angular/common";
import { FilterByDescription } from "./photo-list/filter-by-description.pipe";
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { CardModule } from "../shared/components/card/card.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoModule } from "./photo/photo.module";
import { PhotoDetailsModule } from "./photo-details/photo-details.module";
import { PhotoDetailsComponent } from "./photo-details/photo-details.component";
import { PhotoListModule } from "./photo-list/photo-list.module";


@NgModule({
   
    imports:[
        HttpClientModule,
        PhotoModule,
        CardModule,
        PhotoFormModule,
        PhotoDetailsModule,
        PhotoListModule,
        CommonModule //declarações das diretivas que tem em browsermodule (diretivas do angular)
    ]
})
export class PhotosModule{

}