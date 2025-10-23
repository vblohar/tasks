import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBlock } from './main-block';

describe('MainBlock', () => {
  let component: MainBlock;
  let fixture: ComponentFixture<MainBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
