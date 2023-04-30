import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  total: string | undefined;
  contacts: any = [];

  constructor(private apiService: ApiService) { }

  getContacts() {
    this.apiService.getContacts().subscribe((data: any) => {
      this.contacts = data.contacts;
      this.total = data.total
    });
  }
}
