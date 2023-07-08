import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  url = "http://localhost:3000/";
  constructor(private http: HttpClient) {}

  
  saveStudent(data:any) {
    return this.http.post(this.url+"students",data);
  }

  saveTeacher(data:any) {
    return this.http.post(this.url+"teachers",data);
  }

  
  getStudents() {
    return this.http.get(this.url+"students");
  }

  getTeachers() {
    return this.http.get(this.url+"teachers");
  }

  //result
  getList() {
    
    return this.http.get(this.url+"results");
  }

  saveResult(data: any) {
    
    return this.http.post(this.url+"results", data);
  }

  deleteResult(id: any) {
    return this.http.delete(`${this.url+"results"}/${id}`);
  }

  getCurrentResult(id: any) {
    return this.http.get(`${this.url+"results"}/${id}`);
  }

  updateResult(data:any,id:any) {
    return this.http.put(`${this.url+"results"}/${id}`,data);
  }
}
