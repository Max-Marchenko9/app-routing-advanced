import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phrase } from '../../Shared/phrase.class';
import { PhraseService } from '../../Shared/phrase.service';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[];
  selectedID: number;

  constructor(
    private phraseService: PhraseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedID = +params.id;
      this.phraseService
    .getAllPhrases()
    .then(res => this.phrases = res);
    })
  }
  onSelect(phrase: Phrase) {
    this.router.navigate(['phrases', phrase.id])
  }
  isSelected(phrases: Phrase): boolean{
    return phrases.id === this.selectedID;
  }

}
