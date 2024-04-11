import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})


export class InventoryComponent {
  inventorys = INVENTORYS;

  selectedInventory(inventory: any) {
    console.log(inventory)
  }
}

const INVENTORYS = [
  {
    id: '0000001',
    name: 'Laptop',
    description: 'Good Laptops for Work',
    price: 2999
  },

  {
    id: '0000002',
    name: 'Cars',
    description: 'Bad Cars for Work',
    price: 2999
  },
  {
    id: '0000003',
    name: 'Tables',
    description: 'Good Tables for Work',
    price: 2999
  }

]