import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {Search} from '../models/search';
import { BuscadorIbgeServiceService } from '../services/buscador-ibge-service.service'
import { Cidade } from '../models/cidade'
@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {
    searchModel : Search = {
    especie: null,
    porte: null,
    estado: null,
    cidade: null
  }

  cidade: Cidade = {
    id : null,
    nome : null
  }

   cidades: Cidade[] = [];

   stateSelected: boolean = false

  constructor(private router : Router, private activatedRouter: ActivatedRoute, private buscadorIbgeServiceService: BuscadorIbgeServiceService ) {
    const data = this.activatedRouter.snapshot.params
    this.searchModel.especie = data.especie
    this.searchModel.porte = data.porte
    this.searchModel.estado = data.estado
    this.searchModel.cidade = data.cidade
    const city: Cidade = { id: 0, nome: this.searchModel.cidade };
    this.cidades.push(city);
  }
   

  ngOnInit(): void {
  }

  search(data){
    console.log(data);
    this.router.navigateByUrl('/search')
  }

  getCities(event: any){
    this.stateSelected = true
    this.cidades = []
    this.searchModel.cidade = null
    this.buscadorIbgeServiceService.getCities(event.target.value).subscribe(res => {
      this.cidades = [];
      for(var i = 0;i<res.length;i++){
        const city: Cidade = { id: res[i].id, nome: res[i].nome };
          this.cidades.push(city);
      }
  },error => {
        console.log(error)
  })

  }

}
