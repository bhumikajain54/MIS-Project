import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMenuOpen = false;
  isPagesMenuOpen = false;

  constructor(private router: Router) {

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  togglePagesMenu(event: Event) {
    event.preventDefault();
    this.isPagesMenuOpen = !this.isPagesMenuOpen;
  }
  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Contact Us', path: '/contact' }
  ];
  redirectToLogin(){
    this.router.navigateByUrl('/login')
  }
}

