import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeCta } from './resume-cta';

describe('ResumeCta', () => {
  let component: ResumeCta;
  let fixture: ComponentFixture<ResumeCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeCta],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
