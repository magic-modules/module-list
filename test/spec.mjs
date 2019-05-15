import { is } from '@magic/test'
import * as ModuleList from '../src/index.mjs'

export default [
  { fn: () => ModuleList.View, expect: is.function, info: 'expect ModuleList to be a function' },
]
