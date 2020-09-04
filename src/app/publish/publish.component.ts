import { Component, OnInit } from '@angular/core';
import { Advert } from '../models/advert';
import { Picture } from '../models/picture';
import { ToastrService } from 'ngx-toastr';
import { AdvertService } from '../services/advert.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  advert: Advert = {
    titulo: null,
    descricao: null,
    telefone: null,
    especie: null,
    porte: null,
    cep: null,
    logradouro: null,
    numero: null,
    complemento: null,
    bairro: null,
    cidade: null,
    uf: null,
  }

  picture : Picture = {
    advertId : null,
    base64: null
  }

  getFiles: File[]

  constructor(private toast: ToastrService, private advertService: AdvertService, private router: Router) { }

  ngOnInit(): void {
  }

  selectFiles(event){
     this.getFiles = event.target.files     
  }

  publish(data){

    if(this.getFiles.length > 5){
      this.toast.error('Selecione no máximo 5 fotos !');
    }else{
      for(var i=0;i<this.getFiles.length;i++){
        let reader = new FileReader();
        reader.readAsDataURL(this.getFiles[i]);
        reader.onload = () =>  {
          this.picture.advertId = 1
          this.picture.base64 = reader.result.toString()
          this.advertService.postPicture(this.picture).subscribe(res => {
            console.log(res)
          }, error => {
            console.log(error)
          });
        }, error => {
            console.log(error);
        }
    }
 
    this.advert.titulo = data.titulo;
    this.advert.descricao = data.descricao;
    this.advert.telefone = data.telefone;
    this.advert.especie = data.especie;
    this.advert.porte = data.porte;
    this.advert.cep = data.cep;
    this.advert.logradouro = data.logradouro;
    this.advert.numero = data.numero;
    this.advert.complemento = data.complemento;
    this.advert.bairro = data.bairro;
    this.advert.cidade = data.cidade;
    this.advert.uf = data.uf;
    this.advertService.postAdvert(this.advert).subscribe(res => {
          console.log(res);
          this.toast.success('Anúncio publicado com sucesso !');
          this.router.navigateByUrl('/home-user');
    }, (error : string) => {
          console.log(error);
          this.toast.error('Não foi possível publicar o anúncio ' + error.toString() );
         
    });
  
    }

  }
}
