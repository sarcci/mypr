import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { KolexamService } from '../kolexam.service';
import { parseString } from 'xml2js';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kolexamlist',
  imports: [CommonModule, FormsModule],
  templateUrl: './kolexamlist.component.html',
  styleUrls: ['./kolexamlist.component.scss']
})
export class KolexamlistComponent implements OnInit {
  ExArray: any[] = [];
  kol: number = 0;
  id: number = 0;

  constructor(
    private kolexamservice: KolexamService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.kol = Number(this.route.snapshot.paramMap.get('id'));
    this.getAllExams();
  }

  getAllExams(): void {
    this.kolexamservice.getKolData(this.kol).subscribe(
      (response) => {
        parseString(response, (err, result) => {
          if (err) {
            console.error('Error parsing XML:', err);
            return;
          }

          const ispits = result['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ns2:getIspitsResponse'][0]['ns2:Ispit'];

          if (ispits && ispits.length > 0) {
            this.ExArray = ispits.map((ispit: any) => {
              return {
                id: ispit['ns2:id'][0],
                kol: ispit['ns2:kol'][0],
                predmet: ispit['ns2:predmet'][0],
                datum: ispit['ns2:datum'][0],
                vreme: ispit['ns2:vreme'][0],
                prostorija: ispit['ns2:prostorija'][0],
                sem: ispit['ns2:sem'][0],
                stgod: ispit['ns2:stgod'][0]
              };
            });
          } else {
            this.ExArray = [];
          }
        });
      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to load exams');
      }
    );
  }
  New(): void {
    this.router.navigate(['/newkolexam', this.kol]); 
  }

  Edit(ExItem: any): void {
    console.log('KolItem ID:', ExItem.id);
    this.router.navigate(['/editkolexam', ExItem.id, this.kol]); 
  }

  Delete(ExItem: any): void {
    this.kolexamservice.deleteKolexam(ExItem.id).subscribe(
      response => {
        alert("Exam Session Deleted");
        this.getAllExams();
      },
      error => {
        console.error('Error', error);
        alert("Error");
      }
    );
  } 
}
