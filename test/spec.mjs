import { is } from '@magic/test'
import * as ModuleList from '../src/index.mjs'

export default [
  { fn: () => ModuleList.View, expect: is.function, info: 'expect ModuleList to be a function' },
  {
    fn: () => ModuleList.propTypes,
    expect: is.object,
    info: 'expect ModuleList to have propTypes object',
  },
  {
    fn: () => ModuleList.propTypes.ModuleList,
    expect: is.array,
    info: 'expect ModuleList to have propTypes.ModuleList array',
  },
]
