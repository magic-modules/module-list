const ModuleList = () =>
  ul({ class: 'ModuleList' }, [
    li([
      h3(
        { id: 'module-module-list' },
        Link({ to: 'https://github.com/magic-modules/module-list' }, '@magic-modules/module-list'),
      ),
      div(['the ModuleList module shows the list of @magic-modules you are looking at.']),
      GitBadges({
        project: 'magic-modules/module-list',
        appveyor: 'jaeh/module-list',
      }),
      Link({ to: 'https://magic-modules.github.io/module-list' }, 'docs / demo'),
    ]),
    li([
      h3(
        { id: 'module-theme-list' },
        Link({ to: 'https://github.com/magic-modules/theme-list' }, '@magic-modules/theme-list'),
      ),
      div(['the ThemeList module shows a list of all @magic-themes.']),
      GitBadges({
        project: 'magic-modules/theme-list',
        appveyor: 'jaeh/theme-list',
      }),
      Link({ to: 'https://magic-modules.github.io/theme-list' }, 'docs / demo'),
    ]),
    li([
      h3(
        { id: 'module-client-list' },
        Link({ to: 'https://github.com/magic-modules/client-list' }, '@magic-modules/client-list'),
      ),
      div(['the ClientList module shows a list of all @magic-client libraries.']),
      GitBadges({
        project: 'magic-modules/client-list',
        appveyor: 'jaeh/client-list',
      }),
      Link({ to: 'https://magic-modules.github.io/client-list' }, 'docs / demo'),
    ]),
    li([
      h3(
        { id: 'module-pre' },
        Link({ to: 'https://github.com/magic-modules/pre' }, '@magic-modules/pre'),
      ),
      div('the Pre module allows you to display javascript code with syntax highlighting.'),
      GitBadges({
        project: 'magic-modules/pre',
        appveyor: 'jaeh/pre',
      }),
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
      GitBadges({
        project: 'magic-modules/language-switch',
        appveyor: 'jaeh/language-switch',
      }),
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
      GitBadges({
        project: 'magic-modules/video-embed',
        appveyor: 'jaeh/video-embed',
      }),
      Link({ to: 'https://magic-modules.github.io/video-embed' }, 'docs / demo'),
    ]),
    li([
      h3(
        { id: 'module-git-badges' },
        Link({ to: 'https://github.com/magic-modules/gitbadges' }, '@magic-modules/gitbadges'),
      ),
      div('shows a list of github repository status badges.'),
      GitBadges({
        project: 'magic-modules/gitbadges',
        appveyor: 'jaeh/gitbadges',
      }),
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

ModuleList.dependencies = {
  GitBadges: require('@magic-modules/gitbadges'),
}

module.exports = ModuleList
