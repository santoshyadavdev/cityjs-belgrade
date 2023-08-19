import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./product/product.component";
import { ProductSignalComponent } from "./product-signal/product-signal.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, ProductComponent, ProductSignalComponent]
})
export class AppComponent {
  title = 'cityjs-belgrade-demo';
}
