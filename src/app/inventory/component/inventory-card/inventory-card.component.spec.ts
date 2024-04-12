import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InventoryCardComponent } from "./inventory-card.component";

describe('InventoryCardComponent', () => {
  let component: InventoryCardComponent;
  let fixture: ComponentFixture<InventoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCardComponent);
    component = fixture.componentInstance;
    component.inventory = { id: '1', name: 'Test', price: 10, description: 'Test Description' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selection change event on checkbox change', () => {
    spyOn(component.selectionChanged, 'emit');
    const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]');
    checkbox.dispatchEvent(new Event('change'));
    expect(component.selectionChanged.emit).toHaveBeenCalledWith('1'); // Assuming inventory id is 1
  });
});