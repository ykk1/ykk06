import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  userName: FormControl;
  password: FormControl;

  //name$:Observable<string>;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group(
      {
        'userName': ['', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(20)])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(16)])]
      }
    );
    //关联
    this.userName = <FormControl>this.myForm.controls['userName'];
    this.password = <FormControl>this.myForm.controls['password'];
    //this.name$=this.userName.valueChanges;
    //可以在此实现自己的业务逻辑
    this.userName.valueChanges.subscribe(val => {
      console.log(val);
    })
  }

  onSubmit(value: any) {
    console.log(value);
  }

  login(){
    
  }
}
