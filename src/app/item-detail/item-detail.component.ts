import { Component } from '@angular/core';
import { Observable, forkJoin, mergeMap, switchMap } from 'rxjs';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  itemDetails$!: Observable<string[]>;
  latestItemDetails$!: Observable<string>;
  constructor(private itemService: ItemService) {}
  ngOnInit() {
    // Using mergeMap
    this.itemDetails$ = this.itemService.getItems().pipe(
      mergeMap(items => 
        // Use forkJoin to combine multiple observables into an array
        forkJoin(items.map(itemId => this.itemService.getItemDetails(itemId)))
      )
    );
    // Using switchMap 
     this.latestItemDetails$ = this.itemService.getItems().pipe(
      switchMap(items => 
        // Fetch details for the latest item and switch to the new observable
        this.itemService.getItemDetails(items[items.length - 1])
      )
    );
  }
}




