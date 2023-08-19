import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSignalComponent } from './product-signal.component';

describe('ProductSignalComponent', () => {
  let component: ProductSignalComponent;
  let fixture: ComponentFixture<ProductSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductSignalComponent]
    });
    fixture = TestBed.createComponent(ProductSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
