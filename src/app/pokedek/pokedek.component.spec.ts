import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedekComponent } from './pokedek.component';

describe('PokedekComponent', () => {
  let component: PokedekComponent;
  let fixture: ComponentFixture<PokedekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
