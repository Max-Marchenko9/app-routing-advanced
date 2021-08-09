import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseDetailsComponent } from './phrase-details.component';

describe('PhraseDetailsComponent', () => {
  let component: PhraseDetailsComponent;
  let fixture: ComponentFixture<PhraseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
