import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesAuteursComponent } from './liste-des-auteurs.component';

describe('ListeDesAuteursComponent', () => {
  let component: ListeDesAuteursComponent;
  let fixture: ComponentFixture<ListeDesAuteursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesAuteursComponent]
    });
    fixture = TestBed.createComponent(ListeDesAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
