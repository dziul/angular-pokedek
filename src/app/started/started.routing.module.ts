import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HtmlDocumentModel } from '../shared/html-document/html-document.model';
import { StartedComponent } from './started.component';

const startedRoute: Routes = [
  {
    path: '', // is /started
    component: StartedComponent,
    data: {
      title: 'Inicial',
      description: 'Conteúdo inicial com Angular CLI',
    } as HtmlDocumentModel,
  },
];

@NgModule({
  imports: [RouterModule.forChild(startedRoute)],
  exports: [RouterModule],
})
export class StartedRoutingModule {}
