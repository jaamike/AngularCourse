import { Component } from '@angular/core';
import { ItemListService } from './item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  items: string[];
  newItem: string = '';

  constructor(private itemListService: ItemListService) {
    this.items = itemListService.getItems();
  }

  addItem(): void {
    if (this.newItem.trim() !== '') {
      this.itemListService.addItem(this.newItem);
      this.items = this.itemListService.getItems();
      this.newItem = '';
    }
  }

  deleteItem(index: number): void {
    this.itemListService.deleteItem(index);
    this.items = this.itemListService.getItems();
  }

  editItem(index: number): void {
    const newItem = prompt('Enter the new value for the item:', this.items[index]);
    if (newItem !== null) {
      this.itemListService.editItem(index, newItem);
      this.items = this.itemListService.getItems();
    }
  }
}


