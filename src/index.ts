export type KeyboardEvent =
  | {readonly keyCode: number; readonly key?: string}
  | {readonly keyCode?: number; readonly key: string}

export type EventHandler<T extends KeyboardEvent> = (event: T) => any

export const isKey = <T extends KeyboardEvent>(
  keys: string[],
  keyCodes: number[],
) => (handler: EventHandler<T>) => (event: T) => {
  if (event.key) {
    if (keys.indexOf(event.key) !== -1) {
      return handler(event)
    }
  } else if (event.keyCode) {
    if (keyCodes.indexOf(event.keyCode) !== -1) {
      return handler(event)
    }
  }
}

/**
 * Allows space and enter key events through.
 * Helpful for mimicing a <button>
 */
export const isClick = isKey([' ', 'Enter'], [32, 13])
/** Allows space key events through. */
export const isSpace = isKey([' '], [32])
/**
 * Allows enter key events through.
 * Helpful for mimicing an <a>
 */
export const isEnter = isKey(['Enter'], [13])
/** Allows escape key events through. */
export const isEscape = isKey(['Escape'], [27])
/** Allows key up events through. */
export const isUp = isKey(['ArrowUp', 'Up'], [38])
/** Allows key down events through. */
export const isDown = isKey(['ArrowDown', 'Down'], [40])
/** Allows key left events through. */
export const isLeft = isKey(['ArrowLeft', 'Left'], [37])
/** Allows key right events through. */
export const isRight = isKey(['ArrowRight', 'Right'], [39])
