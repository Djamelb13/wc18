import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDePaysComponent } from './liste-de-pays.component';

describe('ListeDePaysComponent', () => {
  let component: ListeDePaysComponent;
  let fixture: ComponentFixture<ListeDePaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDePaysComponent]
    });
    fixture = TestBed.createComponent(ListeDePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
