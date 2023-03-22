import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from '../../interfaces/login.interfaces';
import { menuData } from './menu.data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isMenu: boolean = false;
  isOpen: boolean = false;
  menuList: { label: string; url: string }[] = [];

  constructor(private ruteador: Router) {
    const userData: string = localStorage.getItem('auth');
    this.isMenu = !!userData;

    if (userData) {
      const userDataParse: AuthResponse = JSON.parse(userData);
      const urls: string[] = userDataParse.permisos.map((e) => e.url);
      this.menuList = menuData.filter((menu) => urls.includes(menu.url));
    }
  }

  ngOnInit(): void {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

  cerrarSeccion(): void {
    localStorage.clear();
    this.ruteador.navigate(['/']);
    location.reload();
  }
}
