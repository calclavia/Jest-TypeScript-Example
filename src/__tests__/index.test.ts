declare var jest: any
declare var describe: Function
declare var it: Function
declare var spyOn: Function
declare var require: any
declare var expect: any

jest.unmock('../index')

import {Counter} from '../index'

describe('Counter', () => {
  it('should increment count', () => {
    let counter = new Counter(0)
    expect(counter.count).toBe(0)
    counter.increment()
    expect(counter.count).toBe(1)
  })
})
