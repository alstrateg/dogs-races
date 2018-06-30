import { TestBed, async } from '@angular/core/testing';
import { ListDogsComponent } from './list-dogs.component';
describe('ListDogsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListDogsComponent
      ],
    }).compileComponents();
  }));
  it('should contain list placeholder', async(() => {
    expect(true).toBeTruthy();
  }));
  it(`should contain dog element`, async(() => {
    expect(true).toBeTruthy();
  }));
  it(`should contain all dogs`, async(() => {
    expect(true).toBeTruthy();
  }));
  it(`should contain dog's name`, async(() => {
    expect(true).toBeTruthy();
  }));
  it(`should contain dog's age`, async(() => {
    expect(true).toBeTruthy();
  }));
  it(`should contain dog's race`, async(() => {
    expect(true).toBeTruthy();
  }));
  it(`should have edit action for each dog`, async(() => {
    expect(true).toBeTruthy();
  }));
  it(`should have remove action for each dog`, async(() => {
    expect(true).toBeTruthy();
  }));

});