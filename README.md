# dcsm-type-helper

`dcsm-type-helper` is a vanilla JavaScript module for checking the type of a variable.

## Installation

You can install `dcsm-type-helper` using npm:

```bash
npm install dcsm-type-helper
```

## Usage

### `typeOf(valueToCheck)`

Returns the type of the value provided as a lowercase string.

```javascript
import { typeOf } from 'dcsm-type-helper';

typeOf(1); // 'number'
```

### `typeIs(valueToCheck)`

Returns an object containing properties for each type of the value provided with a boolean value indicating whether the value is of that type or not.

```javascript
import { typeIs } from 'dcsm-type-helper';

typeIs(1); // { array: false, date: false, nan: false, number: true, function: false, regexp: false, boolean: false, null: false, undefined: false, object: false, string: false, symbol: false, bigint: false }
typeIs(1).number; // true
```