import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';

//eager-loaded components 

const routes: Routes = [
    {
      path:'',
      component: TestComponent,
      children:[
        {
          path:'listado',
          component: ListadoComponent
        },
        {
          path:'formulario',
          component : FormularioComponent
        }
      ]
    },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  bootstrap: [TestComponent]
})
export class TestRoutingModule { }
