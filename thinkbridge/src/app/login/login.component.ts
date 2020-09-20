import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj: any = {};
  registerObj: any = {};
  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    localStorage.removeItem("LoginUsers");
    localStorage.removeItem("ProductList");
  }
  login() {
    var registeredUser = JSON.parse(localStorage.getItem("LoginUsers"));
    if (registeredUser != null) {
      if (registeredUser.userName == this.loginObj.userName) {
        if (registeredUser.password == this.loginObj.password) {
          this.toastr.success('', 'Successfully Looged In.');
          this.router.navigate(['./productdashboard']);
        } else {

          this.toastr.error('', 'Incorrect Password.');
        }
      } else {
        this.toastr.error('', 'No existing user.');

      }
    } else {
      this.toastr.error('', 'No existing user.');
    }
  }
  register() {
    if (this.registerObj.password != this.registerObj.confirmPassword) {
      this.toastr.warning('', 'password is not matched with confirm password.');
    } else {
      localStorage.setItem("LoginUsers", JSON.stringify(this.registerObj));
      this.toastr.success('', 'Successfully Registered.');
    }

  }
}
