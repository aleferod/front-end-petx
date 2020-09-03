import { Component, OnInit } from '@angular/core';
import { Advert } from '../models/advert';
import { ToastrService } from 'ngx-toastr';

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
    fotos : [null]
  }

  getFiles: File[]

  constructor(private toast: ToastrService) { }

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
           this.advert.fotos.push(reader.result.toString()) ;
        }, error => {
            console.log(error);
        }
    }
 
     console.log(this.advert);
    }

  }
}
