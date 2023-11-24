
//parent.component.ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  message: string = '';
  messageFromChild!: string;
  paragraphVisible: boolean = true;
  getMessage(event:string){
    this.messageFromChild = event;
  }

  // สมมติว่านี้คืออาร์เรย์ของออบเจกต์
fruits = [
  {name: 'ส้ม' },
  {name: 'มะพร้าว' },
  {name: 'มะนาว' },
  {name: 'ลิ้นจี่' }
];

}
