import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatransferComponent } from './datatransfer.component';

describe('DatatransferComponent', () => {
  let component: DatatransferComponent;
  let fixture: ComponentFixture<DatatransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatatransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
