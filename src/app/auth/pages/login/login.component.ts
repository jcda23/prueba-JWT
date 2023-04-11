import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Declaración del FormGroup

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['juan@juan.com', [Validators.required, Validators.email]], // Campo de email con validadores
      password: ['pruebas3', [Validators.required, Validators.minLength(6)]], // Campo de password con validadores
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (resp) => {
        this.router.navigateByUrl('/home');
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
