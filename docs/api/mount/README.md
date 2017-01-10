# mount(...)

Render a component to static HTML. Returns a wrapper that includes methods to test the component renders as expected.

```js
import { mount } from 'avoriaz';
import { expect } from 'chai';
import Foo from './components/Foo';

describe('Foo', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(Foo);
    expect(Foo.contains(div)).to.equal(true);
  });
});
```