import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

declare const $: any


@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public LoginForm: FormGroup;
  public hasError: boolean = false;
  editLoginForm: FormGroup;

  constructor(private router: Router) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    this.LoginForm = new FormGroup({
      Email: new FormControl("", [
        Validators.required,
        Validators.pattern(emailRegex),
      ]),
      password: new FormControl("", [Validators.required]),
    });

    this.editLoginForm = new FormGroup({
      changePassword: new FormControl("")
    })
  }

  ngOnInit(): void {}

  adminLogin() {
  this.router.navigateByUrl("Dashboard");
  }

  // EditLogin(){
  //   $("#exampleModal").modal("show");
  //   if(this.editLoginForm.valid){
  //     let changePasswordObj = {
  //       "adminId":"babbe8c2-2b33-4641-869e-bf7c24df2b4e",
  //       password: this.editLoginForm.value.changePassword
  //     }
  //     this.ekartservice.editPasswordAdmin(changePasswordObj).subscribe((passwordResp) => {
  //       if(passwordResp.statusCode == 200){
  //         Swal.fire({
  //           icon:"success",
  //           text: "Successfully Logged in",
  //           showConfirmButton: false,
  //           timer: 3000,
  //         })
  //         $("#exampleModal").modal("hide");
  //       }else{
          
  //       }
  //     })
  //   }
  // }
}
