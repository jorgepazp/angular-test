import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      title: ['', Validators.required],
      name: ['',Validators.required],
      description:['']
    })
  }

  onClick() : void {
    let title = this.formulario.get('title').value;
    let name = this.formulario.get('name').value;
    let description = this.formulario.get('description').value;
    if(title=="" && name ==""){
      alert("Formulario inválido")
    }else{
      alert("Formulario válido \n Title: "+title+"\n Name: "+name+"\n Description: "+description)
    }
   
  }



}
