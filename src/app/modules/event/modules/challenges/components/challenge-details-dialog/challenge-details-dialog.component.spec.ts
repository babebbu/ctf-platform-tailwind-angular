import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDetailsDialogComponent } from './challenge-details-dialog.component';

describe('ChallengeDetailsDialogComponent', () => {
  let component: ChallengeDetailsDialogComponent;
  let fixture: ComponentFixture<ChallengeDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeDetailsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
