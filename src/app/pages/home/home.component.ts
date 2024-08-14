import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'mocca';
  heading: string = 'Hello Mocca Cafe';
  isDiscoloration: boolean = true;
  errorCode: number = 404;
  students: Array<any> = [
    {
      email: 'quanganh@gmail.com',
      password: 'quanganh123',
    },
    {
      email: 'hmh03@gmail.com',
      password: 'hung123',
    },
  ];

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  handleDiscoloration() {
    this.isDiscoloration = !this.isDiscoloration;
  }

  handleSubmit() {
    if (this.loginForm.invalid) return;
    this.students.push(this.loginForm.value);
    this.loginForm.reset();
  }
}
