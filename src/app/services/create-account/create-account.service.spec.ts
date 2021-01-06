import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateAccountService } from './create-account.service';

describe('CreateAccountService', () => {
  let service: CreateAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CreateAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
