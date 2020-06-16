import { TestBed } from '@angular/core/testing';

import { HtmlDocumentService } from './html-document.service';

describe('HtmlDocumentService', () => {
  let service: HtmlDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
