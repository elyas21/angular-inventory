import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  template: `
    <div *ngFor="let inventory of inventorys">
      <app-inventory-card 
      
      [inventory]="inventory" 
      [isSelected]="isSelected(inventory.id)" 
      (selectionChanged)="onInventorySelected($event)"
      
      
      ></app-inventory-card>
    </div>
  `,
  styleUrl: './inventory-list.component.scss'
})
export class InventoryListComponent {
  @Input() inventorys: Array<any> = [];

  selectedInventory: any = null;
  @Output()
  selectedInventoryValue = new EventEmitter<any>();

  onInventorySelected(inventory: string) {
    console.log(inventory)
    if (this.selectedInventory === inventory) {
      this.selectedInventory = null; // Deselect if clicked again
    } else {
      this.selectedInventory = inventory;
    }
    this.selectedInventoryValue.emit(inventory)
  }

  isSelected(inventory: any): boolean {
    return this.selectedInventory === inventory;
  }
}
