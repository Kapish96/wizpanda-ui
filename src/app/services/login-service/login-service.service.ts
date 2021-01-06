import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StudentVO } from 'src/app/interfaces/StudentVO';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl: string = "http://localhost:8080/";
  constructor(private _http: HttpClient) { }

  public login(studentVO: StudentVO): Observable<any>{
    let path = this.baseUrl+"login";
    
    return this._http.post(path,studentVO, {responseType: 'text'}).pipe(catchError(this.errorHandler));
  }

  public errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
