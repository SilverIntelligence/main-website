import { describe, it, expect } from 'vitest';
import { SITE } from '@/lib/site';

describe('SITE constants', () => {
  it('has correct GitHub URL', () => {
    expect(SITE.orgGithub).toBe('https://github.com/SilverIntelligence/');
  });
  it('has correct LinkedIn URL', () => {
    expect(SITE.linkedinCompany).toBe('https://www.linkedin.com/company/wall-street-silver/');
  });
});
