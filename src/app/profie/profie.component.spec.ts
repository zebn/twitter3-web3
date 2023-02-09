import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfieComponent } from './profie.component';

describe('ProfieComponent', () => {
  let component: ProfieComponent;
  let fixture: ComponentFixture<ProfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
