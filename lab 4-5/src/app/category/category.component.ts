import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
  }

  setCategory(currentCategory: number) {
    for (let product of products) {
      product.currentCategory = currentCategory;
    }
  }
}
