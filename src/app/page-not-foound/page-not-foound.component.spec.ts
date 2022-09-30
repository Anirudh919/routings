import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFooundComponent } from './page-not-foound.component';

describe('PageNotFooundComponent', () => {
  let component: PageNotFooundComponent;
  let fixture: ComponentFixture<PageNotFooundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFooundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFooundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
