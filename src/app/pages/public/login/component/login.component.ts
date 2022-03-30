import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginStoreService } from '../service/login.store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  @Input() public loading: boolean | null;

  constructor(
    private formBuilder: FormBuilder,
    private loginStoreService: LoginStoreService
  ) {
    this.createForm();
  }

  public ngOnInit(): void {
    
  }

  public createForm = (): void => {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ]
    });
  }

  public getFieldIsValid = (field: string): boolean | undefined =>
    this.form.get(field)?.invalid && this.form.get(field)?.touched;

  public sendForm = (): void => {
    if (this.form.valid && !this.loading) {
      this.loginStoreService.generateLogin(this.form.get('email')?.value, this.form.get('password')?.value)
    } else 
      Object.values(this.form.controls).forEach(control => control.markAsTouched())
  }

}