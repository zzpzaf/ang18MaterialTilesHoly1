import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavrowComponent } from './navrow.component';

describe('NavrowComponent', () => {
  let component: NavrowComponent;
  let fixture: ComponentFixture<NavrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
