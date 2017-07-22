# filter-key

Exports functions to filter key events to specific keys. Helpful when creating
keyboard-navigated UIs.

## Usage
```jsx
import {isClick} from 'filter-key'

// An accessible button rendered with a div
export const Button = ({onClick, ...props}) =>
  <div
    role='button' 
    tabIndex={0} 
    onClick={onClick} 
    onKeyPress={isClick(onClick)}
    {...props}
  />
```

## Functions

### isClick
Allows space and enter key events through. Helpful for mimicing a `<button>` tag

### isEnter
Allows enter key events through. Helpful for mimicing an `<a>` tag

### isSpace
Allows space key events through.

### isEscape
Allows esc key events through.

### isUp
Allows key up events through.

### isDown
Allows key down events through.

### isLeft
Allows key left events through.

### isRight
Allows key right events through.
