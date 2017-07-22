import {KeyboardEvent, createElement} from 'react'
import {isKey, isEnter} from './index'

describe('isKey', () => {
  it('should support the key property', () => {
    const handler = jest.fn()
    isKey(['Enter'], [13])(handler)({key: 'Enter'})
    expect(handler).toHaveBeenCalledTimes(1)
    isKey(['Enter'], [13])(handler)({key: 'NotEnter'})
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('should support the keyCode property', () => {
    const handler = jest.fn()
    isKey(['Enter'], [13])(handler)({keyCode: 13})
    expect(handler).toHaveBeenCalledTimes(1)
    isKey(['Enter'], [13])(handler)({keyCode: 14})
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('should support multiple values', () => {
    const handler = jest.fn()
    isKey(['Enter', ' '], [13, 32])(handler)({key: 'Enter'})
    expect(handler).toHaveBeenCalledTimes(1)
    isKey(['Enter', ' '], [13, 32])(handler)({key: ' '})
    expect(handler).toHaveBeenCalledTimes(2)
    isKey(['Enter', ' '], [13, 32])(handler)({keyCode: 13})
    expect(handler).toHaveBeenCalledTimes(3)
    isKey(['Enter', ' '], [13, 32])(handler)({keyCode: 32})
    expect(handler).toHaveBeenCalledTimes(4)
  })

  it('should work with React types', () => {
    createElement('div', {
      onKeyDown: isEnter((event: KeyboardEvent<void>) => {
        event.preventDefault()
      }),
    })
  })
})
