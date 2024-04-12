import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryComponent } from './inventory.component';
import { InventoryListComponent } from '../../component/inventory-list/inventory-list.component';
import { InventoryCardComponent } from '../../component/inventory-card/inventory-card.component';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryComponent, InventoryListComponent, InventoryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
