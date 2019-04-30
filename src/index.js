module.exports = () =>
  ul([
    li([
      h3('ModuleList'),
      div(['the ModuleList module shows the list of @magic-modules you are looking at.']),
      p([
        Link({ to: 'https://github.com/magic-modules/module-list' }, '@magic-modules/module-list'),
      ]),
      p([Link({ to: 'https://magic-modules.github.io/module-list' }, 'docs / demo')]),
    ]),
    li([
      h3('Pre'),
      div([
        'the Pre module allows you to display javascript code with syntax highlighting.',
        ' it is used throughout this documentation.',
      ]),
      p([Link({ to: 'https://github.com/magic-modules/pre' }, '@magic-modules/pre')]),
      p([Link({ to: 'https://magic-modules.github.io/pre' }, 'docs / demo')]),
    ]),
    li([
      h3('LanguageSwitch'),
      div('file hierarchy based multilanguage support for magic.'),
      p([
        Link(
          { to: 'https://github.com/magic-modules/languageswitch' },
          '@magic-modules/languageswitch',
        ),
      ]),
      p([Link({ to: 'https://magic-modules.github.io/languageswitch' }, 'docs / demo')]),
    ]),
    li([
      h3('VideoEmbed'),
      div([
        'the VideoEmbed module embeds videos from any video hoster using iframes. ',
        ' comes with default support for vimeo and youtube.',
      ]),
      p([
        Link({ to: 'https://github.com/magic-modules/video-embed' }, '@magic-modules/video-embed'),
      ]),
      p([Link({ to: 'https://magic-modules.github.io/video-embed' }, 'docs / demo')]),
    ]),
    li([
      h3('GitBadges'),
      div('shows a list of github repository status badges.'),
      p([Link({ to: 'https://github.com/magic-modules/gitbadges' }, '@magic-modules/gitbadgesi')]),
      p([Link({ to: 'https://magic-modules.github.io/gitbadges' }, 'docs / demo')]),
    ]),
  ])
