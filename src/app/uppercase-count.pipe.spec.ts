import { UppercaseCountPipe } from './uppercase-count.pipe';

describe('UppercaseCountPipe', () => {
  it('create an instance', () => {
    const pipe = new UppercaseCountPipe();
    expect(pipe).toBeTruthy();
  });
});
