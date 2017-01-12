import mount from '../../../src/mount';
import Form from '../../resources/components/form/Form.vue';
import Wrapper from '../../../src/Wrapper';
import ClickComponent from '../../resources/components/event-components/ClickComponent.vue';
import KeydownComponent from '../../resources/components/event-components/KeydownComponent.vue';
import Submit from '../../resources/components/form/Submit.vue';
import Paragraph from '../../resources/components/paragraph/Paragraph.vue';

describe('Wrapper', () => {
  describe('find', () => {
    it('returns an array of VueWrappers of elements matching tag selector passed', () => {
      const wrapper = mount(Form);
      const input = wrapper.find('input')[0];
      expect(input).to.be.an.instanceOf(Wrapper);
      expect(input.element.className).to.equal('input-text');
    });

    it('returns an array of VueWrappers of elements matching class selector passed', () => {
      const wrapper = mount(Form);
      const input = wrapper.find('.input-text')[0];
      expect(input).to.be.an.instanceOf(Wrapper);
      expect(input.element.className).to.equal('input-text');
    });

    it('returns an array of VueWrappers of elements matching id selector passed', () => {
      const wrapper = mount(Form);
      const input = wrapper.find('#input-text')[0];
      expect(input).to.be.an.instanceOf(Wrapper);
      expect(input.element.className).to.equal('input-text');
    });
  });

  describe.skip('contains', () => {
    it('returns true if wrapper contains element', () => {
      const wrapper = mount(Form);
      expect(wrapper.contains('input')).to.equal(true);
    });

    it('returns false if wrapper does not contain element', () => {
      const wrapper = mount(Form);
      expect(wrapper.contains('doesntexist')).to.equal(false);
    });
  });

  describe.skip('hasClass', () => {
    it('returns true if wrapper has class name', () => {
      const wrapper = mount(Form);
      expect(wrapper.hasClass('form')).to.equal(true);
    });

    it('returns false if wrapper does not have class name', () => {
      const wrapper = mount(Form);
      expect(wrapper.hasClass('not-class-name')).to.equal(false);
    });
  });

  describe.skip('simulate', () => {
    it('causes click handler to fire when wrapper.simulate("click") is called on a child node', () => {
      const childClickHandler = sinon.stub();
      const wrapper = mount(ClickComponent, {
        propsData: { childClickHandler, parentClickHandler: () => {} },
      });
      const button = wrapper.find('#button')[0];
      button.simulate('click');

      expect(childClickHandler).to.be.calledOnce;
    });

    it('causes click handler to fire when wrapper.simulate("click") is fired on root node', () => {
      const parentClickHandler = sinon.stub();
      const wrapper = mount(ClickComponent, {
        propsData: { childClickHandler: () => {}, parentClickHandler },
      });
      wrapper.simulate('click');

      expect(parentClickHandler).to.be.calledOnce;
    });

    it('causes keydown handler to fire when wrapper.simulate("keydown") is fired on root node', () => {
      const keydownHandler = sinon.stub();
      const wrapper = mount(KeydownComponent, {
        propsData: { keydownHandler },
      });
      wrapper.simulate('keydown');

      expect(keydownHandler).to.be.calledOnce;
    });
  });

  describe.skip('html', () => {
    it('returns a VueWrappers HTML as a string', () => {
      const expectedHtml = '<input id="input-submit" type="submit" class="input-submit">';
      const wrapper = mount(Submit);

      expect(wrapper.html()).to.equal(expectedHtml);
    });

    it('returns a Wrappers HTML as a string', () => {
      const expectedHtml = '<input id="input-text" type="text" class="input-text">';
      const wrapper = mount(Form);
      const input = wrapper.find('#input-text')[0];

      expect(input.html()).to.equal(expectedHtml);
    });
  });

  describe.skip('is', () => {
    it('returns true if root node matches tag selector', () => {
      const wrapper = mount(Submit);
      expect(wrapper.is('input')).to.equal(true);
    });

    it('returns true if root node matches class selector', () => {
      const wrapper = mount(Submit);
      expect(wrapper.is('.input-submit')).to.equal(true);
    });

    it('returns true if root node matches id selector', () => {
      const wrapper = mount(Submit);
      expect(wrapper.is('#input-submit')).to.equal(true);
    });

    it('returns false if root node does not match tag selector', () => {
      const wrapper = mount(Submit);
      expect(wrapper.is('p')).to.equal(false);
    });

    it('returns false if root node does not match class selector', () => {
      const wrapper = mount(Submit);
      expect(wrapper.is('.p')).to.equal(false);
    });

    it('returns false if root node does not match id selector', () => {
      const wrapper = mount(Submit);
      expect(wrapper.is('#p')).to.equal(false);
    });
  });

  describe.skip('text', () => {
    it('returns text content of wrapper node', () => {
      const text = 'test text prop';
      const wrapper = mount(Paragraph, { propsData: { text } });
      expect(wrapper.text()).to.equal(text);
    });
  });
});
