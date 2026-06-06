import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  name = "";
  email = "";
  password = "";
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  register() {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.authService.register(data).subscribe({
      next: (res: any) => {
        alert("Registration Successful");
        this.router.navigate(["/"]);
      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }
}
