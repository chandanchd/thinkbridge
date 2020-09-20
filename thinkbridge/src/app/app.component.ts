import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thinkbridge';
  constructor(private router: Router) { }

  logOut(){
    localStorage.removeItem("LoginUsers");
    localStorage.removeItem("ProductList");
    this.router.navigate(['./loginorsignup']);
  }
}
