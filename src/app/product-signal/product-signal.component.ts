import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-signal',
  templateUrl: './product-signal.component.html',
  styleUrls: ['./product-signal.component.scss'],
  standalone: true,
  imports: [JsonPipe],
})
export class ProductSignalComponent implements OnInit {
  product = signal<Product[]>([]);

  constructor() {}

  ngOnInit() {}

  addProduct() {
    this.product.mutate((product) =>
      product.push({
        id: crypto.randomUUID(),
        name: 'product 1',
        price: 100,
        description: 'test',
      })
    );
  }
}
