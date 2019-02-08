import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialV2ModComponent } from './material-v2-mod.component';

describe('MaterialV2ModComponent', () => {
  let component: MaterialV2ModComponent;
  let fixture: ComponentFixture<MaterialV2ModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialV2ModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialV2ModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
