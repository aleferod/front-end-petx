import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  showtoast(){
    this.toast.error('Anuncio excluído !');
  } 

}
