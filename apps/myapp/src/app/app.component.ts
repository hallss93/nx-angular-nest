import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@myapp/api-interfaces';

@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello: Message;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Message>('/api/hello').subscribe((message: Message) => {
      this.hello = message;
    });
  }
}
