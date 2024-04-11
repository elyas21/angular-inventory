import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './container/inventory/inventory.component';
import { InventoryListComponent } from './component/inventory-list/inventory-list.component';
import { InventoryCardComponent } from './component/inventory-card/inventory-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InventoryComponent,
    InventoryListComponent,
    InventoryCardComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule
  ]
})
export class InventoryModule { }
