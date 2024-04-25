import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDetailViewComponent } from './supplier-detail-view.component';

describe('SupplierDetailViewComponent', () => {
  let component: SupplierDetailViewComponent;
  let fixture: ComponentFixture<SupplierDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
