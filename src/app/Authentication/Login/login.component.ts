import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({});
  flag: boolean = true;

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  saveDetails(form: any) {
    if (form.value.email === 'user@example.com' && form.value.password === 'password123') {
      // Login successful, navigate to dashboard
      this.router.navigate(['/dashboard']);
    } else {
      alert('Login failed. Please check your credentials and try again.');
    }
  }
    
}
