import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-types';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError: String = '';

  constructor(private seller: SellerService) { }

  ngOnInit(): void {
    //this.seller.reloadSeller();
  }

  signUp(data: SignUp): void {
    this.seller.userSignUp(data)
  }

  login(data: Login): void {
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError: any) => {
      if (isError) {
        this.authError = "Email ou Senha inválido!"
      }
    })
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }

}
