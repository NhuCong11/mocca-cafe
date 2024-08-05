import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mocca';
  heading: string = 'Hello Mocca Cafe';
  isDiscoloration: boolean = true;
  errorCode: number = 404;
  students: Array<any> = [
    {
      name: 'Đinh Quang Anh',
      avatar:
        'https://images.unsplash.com/photo-1636041246170-9278569b9c36?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      asset: 10000000,
    },
    {
      name: 'Hoàng Mạnh Hùng',
      avatar:
        'https://images.unsplash.com/photo-1544724107-6d5c4caaff30?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      asset: 2000000,
    },
  ];

  handleDiscoloration() {
    this.isDiscoloration = !this.isDiscoloration;
  }
}
