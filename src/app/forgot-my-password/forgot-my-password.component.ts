import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"; 
@Component({
  selector: 'app-forgot-my-password',
  templateUrl: './forgot-my-password.component.html',
  styleUrls: ['./forgot-my-password.component.css']
})
export class ForgotMyPasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  resetPassword(){
    this.router.navigateByUrl('/login')
  }

}
