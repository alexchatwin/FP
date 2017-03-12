/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CatUpdateService } from './cat-update.service';

describe('CatUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatUpdateService]
    });
  });

  it('should ...', inject([CatUpdateService], (service: CatUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
