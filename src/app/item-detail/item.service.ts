import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
   // Simulate fetching a list of items
   getItems(): Observable<number[]> {
    return of([1, 2, 3, 4, 5]);
  }

  // Simulate fetching additional details for an item
  getItemDetails(itemId: number): Observable<string> {
    return of(`Details for Item ${itemId}`);
  }
}


