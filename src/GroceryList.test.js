import React from 'react';
import { shallow, mount } from 'enzyme';
import GroceryList from './GroceryList';

describe('groceryList', () => {
  it('shows all of the groceries', () => {
    const wrapper = mount(
      <GroceryList groceryList={[
          {
            id: 1,
            name: 'apples',
            quantity: '7',
            notes: 'an apple a day keeps the doctor away'
          },
          {
            id: 2,
            name: 'oranges',
            quantity: '1',
            notes: 'vitamin C!'
          }
        ]}
      />
    )
    expect(wrapper.find('.Grocery').length).toEqual(2)
  });

  it('should have a clear button that is disabled is there are no groceries in the grocery list', () => {
    const wrapper = shallow(
      <GroceryList
        groceryList={[]}
      />
    )
    expect(wrapper.find('.Grocery-clear').prop('disabled')).toBe(false)
  });

  it('should call the onClear prop when clicked', () => {
    const onClearMock = jest.fn();

    const wrapper = mount(
      <GroceryList
        groceryList={[
          {
            id: 1,
            name: 'apples',
            quantity: '7',
            notes: 'an apple a day keeps the doctor away'
          },
          {
            id: 2,
            name: 'oranges',
            quantity: '1',
            notes: 'vitamin C!'
          }
        ]}
        onClear={onClearMock}
      />
    );

    wrapper.find('.Grocery-clear').simulate('click');

    expect(onClearMock).toBeCalled();
  });
});
