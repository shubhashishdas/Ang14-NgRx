import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoadingState } from 'src/app/state/app.action';
import { registerUser } from '../store/auth.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private _fb: FormBuilder, private _store: Store<any>) {}

  ngOnInit(): void {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this._fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSignupFormSubmit() {
    if (this.signupForm.valid) {
      this._store.dispatch(setLoadingState({ isLoading: true }));
      this._store.dispatch(registerUser(this.signupForm.value));
    }
  }
}
