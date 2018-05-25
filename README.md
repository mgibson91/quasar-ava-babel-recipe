# Quasar Boilerplate with basic ava test support

Be aware that aliases can't currently be directly referenced in
test files.

If a test file imports a module from another file which itself
uses aliases, that is correctly interpreted.

```
// validate.js
import { isAmericanNumber, isUkNumber } from '@src/validate/phone'

export const isPhoneNumber = (value) => {
  return isAmericanNumber(value) || isUkNumber(value);
}
```


```
// test.js - Doesn't work
import { isPhoneNumber } from '@src/validate'
```

```
// test.js - Does work
import { isPhoneNumber } from './src/validate'
```
