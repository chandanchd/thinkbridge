import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  selectedProductId: string;
  validationMessage: any = {};
  product: any = { };
  productList: any = [];
  constructor(private route: ActivatedRoute, private router: Router,private toastr: ToastrService) {
    this.selectedProductId = this.route.snapshot.paramMap.get('productId');
    let savedProductList = JSON.parse(localStorage.getItem("ProductList"));
    if (savedProductList == null) {
      this.toastr.warning('', 'There is no existing Product for you are requested.');
      
    } else {
      this.productList = savedProductList;
      for (let index = 0; index < this.productList.length; index++) {

        if (this.productList[index].productId == this.selectedProductId) {
          this.product = this.productList[index];
          break;
        }

      }


    }
  }

  ngOnInit(): void {
  }
  updateProduct() {
    if (this.product.name == '' || this.product.name == undefined || this.product.name == null) {
      this.validationMessage["name"] = "Name Is Required";
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
      let tempProductList = [];
      if (savedProductList == null) {
        tempProductList = [];
      } else {
        tempProductList = savedProductList;

      }

      for (let index = 0; index < tempProductList.length; index++) {

        if (tempProductList[index].productId == this.selectedProductId) {
           tempProductList[index] = this.product;
          break;
        }

      }

     
      
      localStorage.setItem("ProductList", JSON.stringify(tempProductList));
      
      this.toastr.success('', 'Product Updated Successfully.');
     // this.user = { qualification: "" };
    }
  }

  goToList() {
    this.router.navigate(['./productdashboard']);
  }
}
