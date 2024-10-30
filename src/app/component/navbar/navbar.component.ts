import { Component } from '@angular/core';
import {Button, ButtonDirective} from "primeng/button";
import {PrimeTemplate} from "primeng/api";
import {ToolbarModule} from "primeng/toolbar";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {InputSwitchModule} from "primeng/inputswitch";
import {AvatarModule} from "primeng/avatar";
import {AuthService} from "../../services/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    Button,
    PrimeTemplate,
    ToolbarModule,
    RouterLink,
    InputSwitchModule,
    AvatarModule,
    ButtonDirective,
    NgIf,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  checked: any;
  value: number=0;
  constructor(public authService: AuthService,private router: Router,) {
  }
  isHomePage(): boolean {
    return this.router.url === '/register';
  }
  userShow(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/home' || currentUrl === '/register'
  }
  login(){
    this.authService.session ={
      name:'Admin',
      email:'admin@gmail.com',
    };
    // let kullanici=new Kullanici
    // kullanici.username=this.userName;
    // kullanici.password=this.password;
    // this.authService.girisYap(kullanici).subscribe((data:any)=>{
    //
    // })
  }
}
