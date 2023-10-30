import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signUpForm: NgForm;
  defaultQuestion: string = 'teacher';
  answer: string = "";
  genders = ['Male', 'Female'];
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: ""
  }
  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    //1. This changes the entire userData object when the button is clicked. setValue is also for resetting all the values in the form
/*    this.signUpForm.setValue({
      userData: {
        username: suggestedName,
        email: ""
      },
      secret: "pet",
      questionAnswer: "",
      gender: "Male"
    })*/


    //2. This only adds username field with the suggest name button is clicked. patchValue is used for one or more properties but not entire form
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  onSubmit(form: NgForm) {
    console.log(this.signUpForm);
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
