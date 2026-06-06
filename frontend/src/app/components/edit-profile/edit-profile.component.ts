import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"],
})
export class EditProfileComponent implements OnInit {
  currentUser: any;
  name = "";
  email = "";
  bio = "";
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser && savedUser !== "undefined") {
      this.currentUser = JSON.parse(savedUser);
      this.name = this.currentUser.name || "";
      this.email = this.currentUser.email || "";
      this.bio = this.currentUser.bio || "";
    }
  }
  saveProfile() {
    const data = {
      userId: this.currentUser._id,
      name: this.name,
      email: this.email,
      bio: this.bio,
    };
    this.userService.updateProfile(data).subscribe({
      next: (res: any) => {
        localStorage.setItem("currentUser", JSON.stringify(res));
        alert("Profile Updated Successfully");
        this.router.navigate(["/chat"]);
      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }
}
