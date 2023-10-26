import { Injectable } from '@angular/core';
import { Persona } from './persona/persona';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  create(persona: Persona){
    return this.http.post<Persona>(environment.apiUrl,persona);
  }

  getAll(){
    return this.http.get<Persona[]>(environment.apiUrl);

  }


}
