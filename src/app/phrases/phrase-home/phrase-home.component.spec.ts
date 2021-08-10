import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseHomeComponent } from './phrase-home.component';

describe('PhraseHomeComponent', () => {
  let component: PhraseHomeComponent;
  let fixture: ComponentFixture<PhraseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
