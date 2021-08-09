import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhrasesListComponent} from "./phrases-list/phrases-list.component";
import {PhraseDetailsComponent} from "./phrase-details/phrase-details.component";

const routes: Routes = [
  {path: 'phrases', component: PhrasesListComponent},
  {path: 'phrases/:id', component: PhraseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
