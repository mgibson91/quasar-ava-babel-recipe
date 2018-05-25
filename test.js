import test from 'ava';
import { isNum } from './src/core/validate';

import Quasar, * as All from 'quasar';
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Quasar, { components: All, directives: All, plugins: All });

test('Test', (t) => {
  t.true(isNum(2));
})
