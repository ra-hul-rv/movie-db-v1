import { Component } from '@angular/core';
import {  AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/app/Data/users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  users :any []=users
 confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');
    if (passwordControl?.value !== confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors({ confirmPassword:  true  });
      return { confirmPassword: true };
    } else {
      confirmPasswordControl?.setErrors(null);
      return null;
    }
  };
form : FormGroup =new FormGroup({});
passflag: boolean = true;
confirmpassflag: boolean = true;

constructor (private fb:FormBuilder,private router:Router)
{
 
}
ngOnInit():void{
  this.form=this.fb.group({
    username: [null, [Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")]],
    email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6)]],
  },
   { validator: this.confirmPasswordValidator }
   )
}
backToLogin(){
  this.router.navigate(['login']);
}
saveDetails(form: any) {
  this.users.push(form.value);
  this.router.navigate(['login']);
}
  
}
