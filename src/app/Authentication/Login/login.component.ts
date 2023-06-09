import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/app/Data/users';

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
    const isAuthenticated=localStorage.getItem('isAuthenticated');
    if(isAuthenticated==='true'){
      this.router.navigate(['/dashboard']);
    }
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }
  goToRegister(){
    this.router.navigate(['/register']);
  }
  saveDetails(form: any) {
    const user = users.find(u => u.email === form.value.email && u.password === form.value.password);
console.log(users)
    if (user) {
      localStorage.setItem('isAuthenticated', 'true')
      this.router.navigate(['/dashboard']);
    } else {
      localStorage.setItem('isAuthenticated', 'false')
      alert('Login failed. Please check your credentials and try again.');
    }
  }
    
}
