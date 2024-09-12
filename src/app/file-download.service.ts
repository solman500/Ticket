import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {
  constructor(private http: HttpClient) {}

  downloadFile(url: string, fileName: string): Observable<void> {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      map(blob => {
        saveAs(blob, fileName);
      })
    );
  }
}
