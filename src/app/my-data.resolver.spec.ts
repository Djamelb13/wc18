import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { myDataResolver } from './my-data.resolver';

describe('myDataResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => myDataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
