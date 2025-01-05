import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editisp',
  templateUrl: './editisp.component.html',
  styleUrls: ['./editisp.component.scss'],
  imports: [FormsModule]
})
export class EditispComponent implements OnInit {
 
  id: number =0;
  mesec: string ="";
  year: string ="";


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Editing Exam ID:', this.id);
  }
 
  Edit() {
    let bodyData = {
      mesec: this.mesec,
      year: this.year,
    };
    this.http.put("http://localhost:8080/EditIsp" + "/" + this.id, bodyData).subscribe((resultData: any) => {
    console.log(resultData);
    this.router.navigateByUrl('/isp');
    });
  }
}
