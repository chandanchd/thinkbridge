import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  selectedProductId: string;
  validationMessage: any = {};
  product: any = {};
  productList: any = [];
  image:any;
  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {
    this.selectedProductId = this.route.snapshot.paramMap.get('productId');
    let savedProductList = JSON.parse(localStorage.getItem("ProductList"));
    let imgUrl = JSON.parse(localStorage.getItem("image"));
    if (savedProductList == null) {
      this.toastr.warning('', 'There is no existing Product for you are requested.');

    } else {
      this.productList = savedProductList;
      this.image=imgUrl;
      console.log(this.image);
      
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

  goToList() {
    this.router.navigate(['./productdashboard']);
  }

}
