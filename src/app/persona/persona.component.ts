import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Persona } from "./persona";
import { PersonaService } from "../persona.service";

@Component({
  selector: "app-persona",
  templateUrl: "./persona.component.html",
  styleUrls: ["./persona.component.css"],
})
export class PersonaComponent {
  clasePersona: Persona = new Persona();
  interfacePersona: Persona = {
    id: 0,
    nombre: "",
    apellido: "",
    fecha_nacimiento: "",
  };
  persona: FormGroup;

  constructor(private personaService: PersonaService) {
    this.persona = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellido: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      fecha_nacimiento: new FormControl("", Validators.required),
    });
  }

  submit() {
    this.personaService.create(this.persona.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
