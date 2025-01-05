import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { KolService } from '../kol.service';

@Component({
  selector: 'app-editkol',
  imports: [FormsModule],
  templateUrl: './editkol.component.html',
  styleUrl: './editkol.component.scss'
})
export class EditkolComponent {
  id: number = 0;
  sem: string = '';
  red: string = '';
  studiska: string = '';

  constructor(private kolService: KolService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')); 
    console.log('Extracted ID in Editkol:', this.id);
  }
  
  Save() : void {
    const newDetails = {
      id: this.id,
      sem: this.sem,
      red: this.red,
      studiska: this.studiska
    };
    this.kolService.editKol(this.id, newDetails).subscribe(response => {
      alert("Exam Session Updated");
      this.router.navigate(['/kolokviumski']);
    });
  }
}
