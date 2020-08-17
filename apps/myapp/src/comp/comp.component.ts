import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@myapp/api-interfaces';

@Component({
  selector: 'myapp-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
})
export class CompComponent implements OnInit {
  @Input() message: Message;

  constructor() {}

  ngOnChanges(_changes: any) {}

  ngOnInit(): void {
    console.log(this.message);
  }
}
