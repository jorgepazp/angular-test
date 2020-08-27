import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestComponent,FormularioComponent, ListadoComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TestModule { }
