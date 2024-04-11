import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inventory-card',
  template: `
    <div class="flex flex-row bg-gray-100 mt-4 shadow-sm items-center mx-12 justify-evenly">
      <div>
        <input type="checkbox" [checked]="isSelected" (change)="onSelectionChange()">
      </div>
      <div class="h-20 shadow-sm mx-3 my-5 border-gray-600">
        {{inventory.id}}
      </div>
      <div class="h-20 shadow-sm mx-3 my-5 border-gray-600">
        {{inventory.name}}
      </div>
      <div class="h-20 shadow-sm mx-3 my-5 border-gray-600">
        {{inventory.price}}
      </div>
      <div class="h-20 shadow-sm mx-3 my-5 border-gray-600">
        {{inventory.description}}
      </div>
    </div>
  `,
  styleUrl: './inventory-card.component.scss'
})
export class InventoryCardComponent {
  @Input() inventory: any;
  @Input() isSelected!: boolean;

  @Output() selectionChanged = new EventEmitter<any>();

  onSelectionChange() {
    this.selectionChanged.emit(this.inventory);
  }
}
