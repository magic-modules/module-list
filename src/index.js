const ModuleList = () =>
  ul({ class: 'ModuleList' }, [
    li([
      h3(
        { id: 'module-module-list' },
        Link({ to: 'https://github.com/magic-modules/module-list' }, '@magic-modules/module-list'),
      ),
      div(['the ModuleList module shows the list of @magic-modules you are looking at.']),
      Link({ to: 'https://magic-modules.github.io/module-list' }, 'docs / demo'),
    ]),
    li([
      h3(
        { id: 'module-pre' },
        Link({ to: 'https://github.com/magic-modules/pre' }, '@magic-modules/pre'),
      ),
      div('the Pre module allows you to display javascript code with syntax highlighting.'),
      Link({ to: 'https://magic-modules.github.io/pre' }, 'docs / demo'),
    ]),
    li([
      h3(
        { id: 'module-language-switch' },
        Link(
          { to: 'https://github.com/magic-modules/languageswitch' },
          '@magic-modules/languageswitch',
        ),
      ),
      div('file hierarchy based multilanguage support for magic.'),
      Link({ to: 'https://magic-modules.github.io/languageswitch' }, 'docs / demo'),
    ]),
    li([
      h3(
        { id: 'module-video-embed' },
        Link({ to: 'https://github.com/magic-modules/video-embed' }, '@magic-modules/video-embed'),
      ),
      div([
        'the VideoEmbed module embeds videos from any video hoster using iframes. ',
        ' comes with default support for vimeo and youtube.',
      ]),
      Link({ to: 'https://magic-modules.github.io/video-embed' }, 'docs / demo'),
    ]),
    li([
      h3(
        { id: 'module-git-badges' },
        Link({ to: 'https://github.com/magic-modules/gitbadges' }, '@magic-modules/gitbadges'),
      ),
      div('shows a list of github repository status badges.'),
      Link({ to: 'https://magic-modules.github.io/gitbadges' }, 'docs / demo'),
    ]),
  ])

ModuleList.style = {
  '.ModuleList': {
    a: {
      display: 'block',
      lineHeight: 1.8,
    },
  },
}

module.exports = ModuleList
