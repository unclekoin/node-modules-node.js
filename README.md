# [Node.js Modules](https://youtu.be/RXFOAqsWzFA)

## ECMAScript Module
#### How to enable ECMAScript Module
* use .mjs file extension
* set "type": "module" in package.json
* use flag: `--input-type=module`

### Imports
```js
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, [...] } from "module-name";
import defaultExport, { export, [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

#### Dynamic import
```js
import("./module-name.js")
  .then((module) => {...})
  .catch((error) => {...});
```

### Exports
```
const a = 1;
export { a };

export const a = 1;

export { a as name, b};

export default a;

export { a as alias, b, c };
```

#### Re-export
```js
// module b.js
export { a } from './a.js';

export { default as a } from './a.js'
```

### Import Phases
1. Construction (parsing)
2. Instantiation
3. Evaluation

### Features
* Native JS modules
* Import is asynchronous
* this -> undefined
* Read only live binding
* import.meta
* No default __dirname, __filename, require, exports, module
* Same as in browser