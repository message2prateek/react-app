import * as React from 'react'

import { shallow } from 'enzyme'

import Square from './'

describe('Square', () => {
  it('matches the snapshot', () => {
    expect(
      toJson(
        shallow(<Square />)
          .first()
          .render()
      )
    ).toMatchSnapshot()
  })
})
