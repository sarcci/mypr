import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wel',
  templateUrl: './wel.component.html',
  styleUrl: './wel.component.scss',
  imports: [CommonModule, FormsModule]
})
export class WelComponent {
  studiska="";

  constructor(private router: Router) {}

  ViewIsp() {
    this.router.navigate(['/isp']); 
  }
  ViewKol() {
    this.router.navigate(['/kolokviumski']); 
  }
  Show() {
    const studiska2 = this.studiska.replace("/", "-");
    this.router.navigate(['site', studiska2]);
  }
}
