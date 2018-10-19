import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOrganismComponent } from './home-organism.component';

describe('HomeOrganismComponent', () => {
  let component: HomeOrganismComponent;
  let fixture: ComponentFixture<HomeOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
