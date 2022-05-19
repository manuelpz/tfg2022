import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private tokenService: TokenService) {}
  isLogged=false

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else this.isLogged = false;
  }
}
