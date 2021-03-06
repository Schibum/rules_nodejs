const assert = require('assert');

const types_files = process.argv.slice(2, 4);
const code_files = process.argv.slice(4, 6);
assert.ok(
    types_files.some(f => f.endsWith('declarationdir_with_value/out/types/a.d.ts')),
    'Missing a.d.ts');
assert.ok(
    types_files.some(f => f.endsWith('declarationdir_with_value/out/types/a.d.ts.map')),
    'Missing a.d.ts.map');
assert.ok(
    code_files.some(f => f.endsWith('declarationdir_with_value/out/code/a.js')), 'Missing a.js');
assert.ok(
    code_files.some(f => f.endsWith('declarationdir_with_value/out/code/a.js.map')),
    'Missing a.js.map');
