import * as vNode from '../../../src/utils/vNode';


function elementWithId(id) {
  const element = document.createElement('p');
  element.setAttribute('id', id);
  return element;
}

const getAttribute = () => {};

const vNodeMock = {
  elm: {
    className: 'find',
    getAttribute,
  },
  tag: 'span',
  child: undefined,
  children: [
    {
      elm: elementWithId('id'),
      tag: 'div',
      child: undefined,
      children: [
        {
          elm: {
            className: 'find',
            getAttribute,
          },
          tag: 'p',
          children: undefined,
        },
        {
          elm: {
            className: undefined,
            getAttribute,
          },
          tag: 'div',
          child: undefined,
          children: undefined,
        },
        {
          elm: {
            nodeName: '#text',
          },
        },
      ],
    },
    {
      elm: {
        className: 'this that',
        getAttribute,
      },
      tag: 'div',
      child: undefined,
      children: undefined,
    },
  ],
};

describe('vNode', () => {
  describe('findByTag', () => {
    it('returns an array of vNodes of elements matching tag selector passed', () => {
      expect(vNode.findByTag(vNodeMock, 'div').length).to.equal(3);
    });
  });

  describe('findByClass', () => {
    it('returns an array of vNodes of elements matching className passed', () => {
      expect(vNode.findByClass(vNodeMock, 'find').length).to.equal(2);
    });

    it('returns an array of vNodes of elements matching className passed when node has multiple classes', () => {
      expect(vNode.findByClass(vNodeMock, 'this').length).to.equal(1);
    });
  });

  describe('findById', () => {
    it('returns an array of vNodes of elements matching id passed', () => {
      expect(vNode.findById(vNodeMock, 'id').length).to.equal(1);
    });
  });
});
