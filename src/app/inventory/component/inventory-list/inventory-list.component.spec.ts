import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InventoryCardComponent } from "../inventory-card/inventory-card.component";
import { InventoryListComponent } from "./inventory-list.component";

describe('InventoryListComponent', () => {
  let component: InventoryListComponent;
  let fixture: ComponentFixture<InventoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryListComponent, InventoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryListComponent);
    component = fixture.componentInstance;
    component.inventorys = [
      { id: '1', name: 'Test 1', price: 10, description: 'Test Description 1' },
      { id: '2', name: 'Test 2', price: 20, description: 'Test Description 2' }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle inventory selection', () => {
    component.onInventorySelected('1');
    expect(component.selectedInventory).toEqual('1');

    component.onInventorySelected('1'); // Deselecting
    expect(component.selectedInventory).toBeNull();
  });

  it('should check if inventory is selected', () => {
    component.selectedInventory = '1';
    expect(component.isSelected('1')).toBeTrue();
  });
});