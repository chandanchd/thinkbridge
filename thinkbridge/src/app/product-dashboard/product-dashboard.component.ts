import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  products: any = [];
  selectedProductId: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let savedProductList = JSON.parse(localStorage.getItem("ProductList"));

    if (savedProductList == null) {
      this.products = [];
    } else {
      this.products = savedProductList;

    }
  }
  addProduct() {
    this.router.navigate(['./addProduct']);
  }
  viewProduct(productId) {
    this.router.navigate(['./viewProduct', productId]);
  }
  editProduct(productId) {
    this.router.navigate(['./editProduct', productId]);
  }
  deleteProduct(productId) {
    this.selectedProductId = productId;
    $("#deleteProductModal").modal("show");
  }
  confirmDeleteProduct() {
    let savedProductList = JSON.parse(localStorage.getItem("ProductList"));
    for (let index = 0; index < savedProductList.length; index++) {
      if (savedProductList[index].productId == this.selectedProductId) {
        savedProductList = savedProductList.filter(obj => obj !== savedProductList[index]);
        break;
      }

    }

    localStorage.setItem("ProductList", JSON.stringify(savedProductList));
    alert("Product Deleted Successfully");
    $("#deleteProductModal").modal("hide");
    this.products = savedProductList;
  }
}
