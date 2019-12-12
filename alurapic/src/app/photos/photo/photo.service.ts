import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";
import { PhotoComment } from "./photo-comment";
import { map, catchError } from "rxjs/operators";
import { of, throwError } from "rxjs";
import { environment } from '../../../environments/environment'

const API = environment.ApiUrl;

@Injectable( {providedIn : 'root'} )
export class PhotoService{
    constructor(private http: HttpClient){

    }

    listfromUser(username : string){
        return this.http
            .get<Photo[]>(API + '/' + username +'/photos');
    }


    //por padrao sempre mostra os 12 primeiros registros
    listfromUserPaginated(username:string, page:number){
            //responsavel para receber um atributo chamado page na url
            const params = new HttpParams().append('page', page.toString());

            return this.http
                .get<Photo[]>(API + '/'+ username + '/photos', {params:params})
    }

    upload(description:string, allowComments:boolean, file : File){
        //Quando se envia um arquivo no json é necessário usar o formData

        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true':'false');
        formData.append('imageFile', file);
        return this.http.post(API + '/photos/upload' , formData);
    }


    findById(id:number){
        return this.http.get<Photo>(API + '/photos/' + id);
    }

    getComments(photoId: number){
        return this.http.get<PhotoComment[]>(API + '/photos/' + photoId + '/comments');
    }

    addComent(photoId:number, commentText: string){
        return this.http.post(API + '/photos/' + photoId + '/comments',{
            commentText: commentText
        });

    }

    removePhoto(idPhoto:number){
        return this.http.delete(API + '/photos/'+ idPhoto);
    }
    //observe:response -> indica que vc quer o retorno do cabeçalho da requisição (cod de status...)
    like (photoId:number){
          return this.http.post(API +'/photos/' + photoId + '/like', {}, { observe:'response'}
        )   
        .pipe(map(res =>true))
        .pipe(catchError(err => {
            return err.status == '304' ? of(false) : throwError(err);
        }));
    }
}