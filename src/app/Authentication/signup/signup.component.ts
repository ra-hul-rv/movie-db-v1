import { Component } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
form : FormGroup =new FormGroup({});
constructor (private fb:FormBuilder)
{
 
}
ngOnInit():void{
  this.form=this.fb.group({
  })
}
}
