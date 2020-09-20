import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  validationMessage: any = {};
  product: any = { };
  productList: any = [];
  fileToUpload: File = null;
  reader:any;
  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.getBase64(this.fileToUpload);
  }
  getBase64(event) {
    let me = this;
    //let file = event.target.files[0];
    this.reader = new FileReader();
    this.reader.readAsDataURL(event);
    this.reader.onload = function () {
      //me.modelvalue = reader.result;
      console.log(this.reader.result);
      localStorage.setItem("image", JSON.stringify(this.reader.result));
    };
    this.reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  addProduct() {

    if (this.product.name == '' || this.product.name == undefined || this.product.name == null) {
      this.validationMessage["name"] = "First Name Is Required";
    } else {
      delete this.validationMessage["name"];
    }
    if (this.product.description == '' || this.product.description == undefined || this.product.description == null) {
      this.validationMessage["description"] = "Description Name Is Required";
    } else {
      delete this.validationMessage["description"];
    }
    if (this.product.price == '' || this.product.price == undefined || this.product.price == null) {
      this.validationMessage["price"] = "Price  Is Required";
    } else {
      delete this.validationMessage["price"];
    }
    if (this.product.quantiny == '' || this.product.quantiny == undefined || this.product.quantiny == null) {
      this.validationMessage["quantiny"] = "Quantiny Is Required";
    } else {
      delete this.validationMessage["quantiny"];
    }
    if (this.product.date == '' || this.product.date == undefined || this.product.date == null) {
      this.validationMessage["date"] = "Date Is Required";
    } else {
      delete this.validationMessage["date"];
    }

    if (Object.keys(this.validationMessage).length == 0) {


      let savedProductList = JSON.parse(localStorage.getItem("ProductList"));
      if (savedProductList == null) {
        this.productList = [];
      } else {
        this.productList = savedProductList;

      }
      this.product['productId'] = this.productList.length + 1;
      this.productList.push(this.product);
      localStorage.setItem("ProductList", JSON.stringify(this.productList));
      this.toastr.success('', 'Product Created Successfully.');
      this.product = {};
    }
  }

  goToList() {
    this.router.navigate(['./productdashboard']);
  }
}
