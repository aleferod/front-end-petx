import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BuscadorIbgeServiceService } from '../services/buscador-ibge-service.service'
import { Cidade } from '../models/cidade'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cidade: Cidade = {
    id : null,
    nome : null
  }

   cidades: Cidade[] = [];

  constructor(private router : Router, private buscadorIbgeServiceService: BuscadorIbgeServiceService) { }

  ngOnInit(): void {
  }

  search(data){
    console.log(data);
      this.router.navigate(['/search/', data]);
  }

  getCities(event: any){
    this.cidades = []
    this.buscadorIbgeServiceService.getCities(event.target.value).subscribe(res => {
      this.cidades = [];
      for(var i = 0;i<res.length;i++){
        console.log(res[i].nome);
        const city: Cidade = { id: res[i].id, nome: res[i].nome };
          this.cidades.push(city);
      }
  },error => {
        console.log(error)
  })
  }

}
