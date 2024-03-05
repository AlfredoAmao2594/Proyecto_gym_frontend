import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/Auth/login.service';
import { MenuItem,PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  items: MenuItem[] | undefined;
  isMenuVisible: boolean = false;

  userLoginOn:boolean=false;
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn) => {
          this.userLoginOn=userLoginOn;
        }
      }
    )
  }

  toggleMenu(event: Event) {
    event.preventDefault(); // Evita la redirección
    this.isMenuVisible = !this.isMenuVisible;
  }
  
  logout()
  {
    this.loginService.logout();
    this.router.navigate(['/login'])
  }

  showMenu() {
    this.isMenuVisible = true;
  }

  hideMenu() {
    this.isMenuVisible = false;
  }
}
