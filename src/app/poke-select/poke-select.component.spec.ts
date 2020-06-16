import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSelectComponent } from './poke-select.component';

describe('PokeSelectComponent', () => {
  let component: PokeSelectComponent;
  let fixture: ComponentFixture<PokeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokeSelectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
