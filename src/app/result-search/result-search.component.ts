import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {Search} from '../models/search'
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
  
  constructor(private router : Router, private activatedRouter: ActivatedRoute ) {
    const data = this.activatedRouter.snapshot.params
    this.searchModel.especie = data.especie
    this.searchModel.porte = data.porte
    this.searchModel.estado = data.estado
    this.searchModel.cidade = data.cidade
  }
   

  ngOnInit(): void {
  }

  search(data){
    console.log(data);
    this.router.navigateByUrl('/search')
  }

}
