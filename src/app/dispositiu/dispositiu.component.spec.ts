import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositiuComponent } from './dispositiu.component';

describe('DispositiuComponent', () => {
  let component: DispositiuComponent;
  let fixture: ComponentFixture<DispositiuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositiuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
