import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhrasesListComponent} from "./phrases-list/phrases-list.component";
import {PhraseDetailsComponent} from "./phrase-details/phrase-details.component";
import { PhraseHomeComponent } from './phrase-home/phrase-home.component';

const routes: Routes = [
  {path: '', redirectTo: '/phrases', pathMatch: 'full'},//при ошибках возврат на phrases 
  {
    path: 'phrases',
    component: PhraseHomeComponent,
    children: [
      {
        path: '',
        component: PhrasesListComponent,
        children: [
          {path: ':id', component: PhraseDetailsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
