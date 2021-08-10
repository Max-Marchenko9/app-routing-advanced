import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhrasesRoutingModule } from './phrases-routing.module';
import {PhrasesListComponent} from "./phrases-list/phrases-list.component";
import {PhraseDetailsComponent} from "./phrase-details/phrase-details.component";
import { PhraseHomeComponent } from './phrase-home/phrase-home.component';


@NgModule({
  declarations: [PhrasesListComponent, PhraseDetailsComponent, PhraseHomeComponent],
  imports: [
    CommonModule,
    PhrasesRoutingModule
  ]
})
export class PhrasesModule { }
