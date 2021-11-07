import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const _ = require('lodash');

console.log(__filename);
console.log(__dirname);
console.log(_.camelCase('create-require'));
