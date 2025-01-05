import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KolService {
  private soapUrl = 'http://localhost:8080/ws'; 

  constructor(private http: HttpClient) {}

  getKolData(): Observable<any> {
    const soapBody = `
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <ns2:getAllKolRequest xmlns:ns2="http://spring.io/guides/gs-producing-web-service">
          </ns2:getAllKolRequest>
        </soap:Body>
      </soap:Envelope>
    `;
    console.log(soapBody);

    const headers = new HttpHeaders({
      'Content-Type': 'text/xml' 
    });

    return this.http.post(this.soapUrl, soapBody, { headers, responseType: 'text' });
  }

  deleteKol(id: number): Observable<any> {
    const soapBody1 = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://spring.io/guides/gs-producing-web-service">
      <soapenv:Header/>
      <soapenv:Body>
        <web:deleteKolRequest>
          <web:id>${id}</web:id>
        </web:deleteKolRequest>
      </soapenv:Body>
    </soapenv:Envelope>`;
    console.log(soapBody1);

    return this.http.post(this.soapUrl, soapBody1, {
      headers: { 'Content-Type': 'text/xml' },
      responseType: 'text'
    });
  }

  editKol(id: number, newDetails: any): Observable<any> {
    const soapBody2 = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://spring.io/guides/gs-producing-web-service">
      <soapenv:Header/>
      <soapenv:Body>
        <web:updateKolRequest>
          <web:id>${id}</web:id>
          <web:red>${newDetails.red}</web:red>
          <web:sem>${newDetails.sem}</web:sem>
          <web:studiska>${newDetails.studiska}</web:studiska>
        </web:updateKolRequest>
      </soapenv:Body>
    </soapenv:Envelope>`;
    console.log(soapBody2);

    return this.http.post(this.soapUrl, soapBody2, {
      headers: { 'Content-Type': 'text/xml' },
      responseType: 'text'
    });
  }

  createKol(kol: any): Observable<any> {
    const soapBody3 = `
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <ns2:addKolRequest xmlns:ns2="http://spring.io/guides/gs-producing-web-service">
            <ns2:Kol>
              <ns2:sem>${kol.sem}</ns2:sem>
              <ns2:red>${kol.red}</ns2:red>
              <ns2:studiska>${kol.studiska}</ns2:studiska>
            </ns2:Kol>
          </ns2:addKolRequest>
        </soap:Body>
      </soap:Envelope>
    `;
    console.log(soapBody3);

    return this.http.post(this.soapUrl, soapBody3, {
      headers: { 'Content-Type': 'text/xml' },
      responseType: 'text'
    });
  }
}
