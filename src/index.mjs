export const View = (props = {}) => {
  CHECK_PROPS(props, propTypes, 'ModuleList')

  return GitList({
    class: 'ModuleList',
    org: 'magic-modules',
    header: [Link({ to: 'https://magic-modules/github.io' }, '@magic-modules')],
    description: [
      'modules are the grimoires of ',
      Link({ to: 'https://magic.github.io/core' }, '@magic'),
      '. modules add both client and server functionality to your @magic app.',
    ],
    items: [
      {
        name: 'accordion',
        description: 'Accordion shows a list of items that horizontally open/close.',
      },
      {
        name: 'hero',
        description: 'Hero modules are full screen top of page content.',
      },
      {
        name: 'language-switch',
        description: [
          'LanguageSwitch provides',
          ' file hierarchy based multilanguage support for magic.',
        ],
      },
      {
        name: 'gdpr',
        description: 'Gdpr compliant popup that allows users to allow or deny cookies.',
      },
      {
        name: 'pre',
        description: 'Pre allows you to display javascript code with syntax highlighting.',
      },
      {
        name: 'sound-cloud',
        description: 'embed soundcloud track, playlist and user widgets',
      },
      {
        name: 'video-embed',
        description: [
          'VideoEmbed embeds videos from any video hoster using iframes. ',
          ' comes with default support for vimeo and youtube.',
        ],
      },
      {
        name: 'git-badges',
        description: 'GitBadges shows a list of github repository status badges.',
      },
      {
        name: 'git-list',
        description: 'show a list of git repositories like the one you are looking at.',
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
        name: 'library-list',
        description: 'LibraryList shows a list of all @magic-libraries libraries.',
      },
    ],
    // overload
    ...props,
  })
}

export const propTypes = {
  ModuleList: [
    { key: 'id', type: 'string' },
    { key: 'org', type: 'string' },
    { key: 'header', type: 'string' },
    { key: 'desc', type: ['string', 'array'] },
    { key: 'items', type: 'array' },
  ],
}
