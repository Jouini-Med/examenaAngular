import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesLivresComponent } from './liste-des-livres.component';

describe('ListeDesLivresComponent', () => {
  let component: ListeDesLivresComponent;
  let fixture: ComponentFixture<ListeDesLivresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesLivresComponent]
    });
    fixture = TestBed.createComponent(ListeDesLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
