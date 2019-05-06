module.exports = () => [
  h1('@magic-modules/module-list'),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' ModuleList component. It shows a list of all @magic-modules.',
  ]),

  GitBadges({
    project: 'magic-modules/module-list',
    appveyor: 'jaeh/module-list',
  }),

  h2({ id: 'installation' }, 'installation'),
  Pre('npm install magic-modules/module-list'),

  h2({ id: 'usage' }, 'usage'),
  p('in a page or component'),
  Pre('module.exports = {\n  View: () => ModuleList,\n}'),

  h2({ id: 'demo' }, 'demo'),
  p('this is what it looks like'),
  ModuleList,

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-modules/module-list/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
