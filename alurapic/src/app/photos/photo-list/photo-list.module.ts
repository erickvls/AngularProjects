import { NgModule } from "@angular/core";
import { PhotoListComponent } from "./photo-list.component";
import { CommonModule } from "@angular/common";
import { FilterByDescription } from "./filter-by-description.pipe";
import { PhotoModule } from "../photo/photo.module";
import { CardModule } from "../../shared/components/card/card.module";
import { RouterModule } from "@angular/router";
import { LoadButtonComponent } from "./load-button/load-button.component";

@NgModule({
    declarations:[PhotoListComponent,FilterByDescription,LoadButtonComponent],
    imports:[CommonModule,PhotoModule,CardModule,RouterModule],
    exports:[PhotoListComponent]
})
export class PhotoListModule{

}