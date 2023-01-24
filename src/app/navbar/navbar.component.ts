import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

    // this is empty
  }
  // to log out from application

  logout(){
    sessionStorage.clear()
    sessionStorage.setItem("login","false")
    this.router.navigateByUrl("")
  }

}
