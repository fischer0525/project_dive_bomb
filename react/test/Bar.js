import BarList from 'components/BarList';
import Bar from 'components/Bar';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('Bar', () => {

  beforeEach(() => {
    wrapper = mount(
      <Bar
        id={bar.id}
        key={bar.id}
        name={bar.name}
        url={bar.url}
        address={bar.address}
        city={bar.city}
        state={bar.state}
        zip={bar.zip}
        phone_number={bar.phone_number}
        image_url={bar.image_url}
        rating={bar.rating}
        description={bar.description}
      />
    );
  });

  it('should render a Bar Component', () => {
    expect(wrapper.find(Bar)).toBePresent();
  });
});
