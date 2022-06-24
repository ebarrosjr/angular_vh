import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosgraducaoComponent } from './posgraducao.component';

describe('PosgraducaoComponent', () => {
  let component: PosgraducaoComponent;
  let fixture: ComponentFixture<PosgraducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosgraducaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosgraducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
