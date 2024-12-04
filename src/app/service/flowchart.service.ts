import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowchartService {

  private apiUrl = '/assets/mock/data.json';  // Example API URL

  constructor(private http: HttpClient) { }

  getFlowCharts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // Making a GET request
  }

  uploadFile(file: File): Observable<any> {
    const uploadData = "http://localhost:8080/api/zip/upload/processfilename=SecurityGatewayServices%5CIAMSMART%5CIamSmartEncryptionDecryption.process";
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    // Optionally, you can set headers (e.g., if your server needs authentication)
    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data',  // For file uploads
      // Add other headers if necessary
    });

    // Perform the HTTP POST request to send the file
    return this.http.post<any>(uploadData, formData, { headers });
  }

  postSelectedFlows(queryString, data: any): Observable<any> {
    const downloadData = "http://localhost:8080/api/zip/download?"+queryString;
    return this.http.post<any>(downloadData, data);
  }


}
