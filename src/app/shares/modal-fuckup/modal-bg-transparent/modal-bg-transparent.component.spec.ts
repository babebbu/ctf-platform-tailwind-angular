import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBgTransparentComponent } from './modal-bg-transparent.component';

describe('ModalBgTransparentComponent', () => {
  let component: ModalBgTransparentComponent;
  let fixture: ComponentFixture<ModalBgTransparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBgTransparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBgTransparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
