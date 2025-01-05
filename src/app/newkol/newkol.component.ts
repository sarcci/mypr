import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { KolService } from '../kol.service';
@Component({
  selector: 'app-newkol',
  imports: [FormsModule],
  templateUrl: './newkol.component.html',
  styleUrl: './newkol.component.scss'
})
export class NewkolComponent implements OnInit {
  sem: string = '';
  red: string = '';
  studiska: string = '';

  constructor(private kolService: KolService, private router: Router) {}

  ngOnInit(): void {
  
  }
  
  New() : void {
    console.log('Form submitted');
    const newKol = {
      sem: this.sem,
      red: this.red,
      studiska: this.studiska
    };
    this.kolService.createKol(newKol).subscribe(response => {
      alert("Exam Session Added");
      this.router.navigate(['/kolokviumski']);
    });
  }
}
