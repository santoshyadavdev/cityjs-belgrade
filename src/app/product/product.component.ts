import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [JsonPipe],
})
export class ProductComponent implements OnInit {
  product: Product[] = [];
  constructor() {}

  ngOnInit() {}

  addProduct() {
    this.product.push({
      id: crypto.randomUUID(),
      name: 'product 1',
      price: 100,
      description: 'test',
    });
  }
}
