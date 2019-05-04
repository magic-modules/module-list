const ModuleList = props => {
  const {
    header = [Link({ to: 'https://magic-modules/github.io' }, '@magic-modules')],
    description = [
      'modules are the grimoires of ',
      Link({ to: 'https://magic.github.io/core' }, '@magic'),
    ],
  } = props

  return GitList({
    class: 'ModuleList',
    org: 'magic-modules',
    header,
    description,
    items: [
      {
        name: 'language-switch',
        description:
          'LanguageSwitch provides file hierarchy based multilanguage support for magic.',
      },
      {
        name: 'video-embed',
        description: [
          'VideoEmbed embeds videos from any video hoster using iframes. ',
          ' comes with default support for vimeo and youtube.',
        ],
      },
      {
        name: 'sound-cloud',
        description: 'embed soundcloud track, playlist and user widgets',
      },
      {
        name: 'module-list',
        description: 'ModuleList shows the list of @magic-modules you are looking at.',
      },
      {
        name: 'theme-list',
        description: 'ThemeList shows a list of all @magic-themes.',
      },
      {
        name: 'client-list',
        description: 'ClientList shows a list of all @magic-client libraries.',
      },
      {
        name: 'pre',
        description: 'Pre allows you to display javascript code with syntax highlighting.',
      },
      {
        name: 'git-badges',
        description: 'GitBadges shows a list of github repository status badges.',
      },
      {
        name: 'git-list',
        description: 'show a list of git repositories like the one you are looking at.',
      },
    ],
  })
}

ModuleList.dependencies = {
  GitList: require('@magic-modules/git-list'),
}

module.exports = ModuleList
