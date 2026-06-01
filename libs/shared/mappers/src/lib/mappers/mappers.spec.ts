import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mappers } from './mappers';

describe('Mappers', () => {
  let component: Mappers;
  let fixture: ComponentFixture<Mappers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mappers],
    }).compileComponents();

    fixture = TestBed.createComponent(Mappers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
