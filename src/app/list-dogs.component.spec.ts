import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ListDogsComponent } from './list-dogs.component';
import { TestDogsService } from './Testing/dogs-races.testing.service';
import { DogsService } from './dogs-races.service';

let fixture: ComponentFixture<ListDogsComponent>;

describe('ListDogsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListDogsComponent
      ],
      providers: [{    
        provide: DogsService, useClass: TestDogsService 
      }]
    }).compileComponents()
  }));

  it('should contain list placeholder', async(() => {
    const fixture = TestBed.createComponent(ListDogsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.dogsList').length).toBeGreaterThan(0);
  }));

  it(`should contain dog element`, async(() => {
    const fixture = TestBed.createComponent(ListDogsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.dogsList-item').length).toBeGreaterThan(0);
  }));

  it(`should contain all dogs`, async(() => {
    //FIXME: implement test scentario
    expect(true).toBeTruthy();
  }));

  it(`should contain dog's name`, async(() => {
    //FIXME: implement test scentario
    expect(true).toBeTruthy();
  }));

  it(`should contain dog's age`, async(() => {
    //FIXME: implement test scentario
    expect(true).toBeTruthy();
  }));

  it(`should contain dog's race`, async(() => {
    //FIXME: implement test scentario
    expect(true).toBeTruthy();
  }));

  it(`should have edit action for each dog`, async(() => {
    //FIXME: implement test scentario
    expect(true).toBeTruthy();
  }));

  it(`should have remove action for each dog`, async(() => {
    //FIXME: implement test scentario
    expect(true).toBeTruthy();
  }));

});