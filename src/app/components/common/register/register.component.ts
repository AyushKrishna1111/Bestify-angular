import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private registerService: RegisterService) { }
  
  ngOnInit(): void {

  }

  onSubmit() {
  
    this.registerService.register(this.form).subscribe(
      data => {
        //console.log(data);
        
        if(data.output === "Success"){
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        }
        else{
          this.errorMessage = data.output; 
          this.isSignUpFailed = true;
        }
      },
      err => {
        console.log(err);
        this.errorMessage = " Some error occured ; check console for more details ";
      }
    );
  }


}
