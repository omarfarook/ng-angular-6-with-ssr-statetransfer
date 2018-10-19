import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundOrganismComponent } from './not-found-organism.component';

describe('NotFoundOrganismComponent', () => {
  let component: NotFoundOrganismComponent;
  let fixture: ComponentFixture<NotFoundOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
