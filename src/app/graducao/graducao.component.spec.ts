import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraducaoComponent } from './graducao.component';

describe('GraducaoComponent', () => {
  let component: GraducaoComponent;
  let fixture: ComponentFixture<GraducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraducaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
