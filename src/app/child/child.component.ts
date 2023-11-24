//child.components.ts
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Output() messageFormChild = new EventEmitter<string>();
  sendMessage(){
    this.messageFormChild.emit("this is message from child!");
  }
}
