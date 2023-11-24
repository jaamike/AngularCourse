import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  constructor() { }
  private items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  getItems(): string[] {
    return this.items;
  }

  addItem(item: string): void {
    this.items.push(item);
  }

  deleteItem(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  editItem(index: number, newItem: string): void {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = newItem;
    }
  }
}
