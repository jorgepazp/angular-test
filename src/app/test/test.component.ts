import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
    <div>
    <h1> Test </h1>
    
        <button routerLink="listado"  routerLinkActive="active" >Listado</button>
        <button routerLink="formulario" routerLinkActive="active">Formulario</button>
    </div>
    <router-outlet></router-outlet>`,
    styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}