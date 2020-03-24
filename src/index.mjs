export const View = () =>
  GitList({
    class: 'ModuleList',
    org: 'magic-modules',
    header: [Link({ to: 'https://magic-modules/github.io' }, '@magic-modules')],
    description: [
      'modules are the building blocks of ',
      Link({ to: 'https://magic.github.io/core' }, '@magic'),
      '. modules can be used to add both client and server functionality to your @magic app.',
    ],
    items: [
      {
        name: 'about-magic',
        description: 'AboutMagic shows some information about @magic.',
      },
      {
        name: 'accordion',
        description: 'Accordion shows a list of items that horizontally open/close.',
      },
      {
        name: 'example-list',
        description: 'ExampleList shows a list of @magic-examples pages.',
      },
      {
        name: 'gdpr',
        description: 'Gdpr compliant popup that allows users to allow or deny cookies.',
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
        name: 'hero',
        description: 'Hero modules are full screen top of page content.',
      },
      {
        name: 'language-switch',
        description: 'LanguageSwitch provides simple multilanguage support for magic.',
      },
      {
        name: 'library-list',
        description: 'LibraryList shows a list of all @magic-libraries libraries.',
      },
      {
        name: 'light-box',
        description: 'images that show a bigger view of themselves when clicked.',
      },
      {
        name: 'light-switch',
        description: 'dark/light theme color switch button.',
      },
      {
        name: 'messages',
        description: 'Messages shows popup messages.',
      },
      {
        name: 'module-list',
        description: 'ModuleList shows the list of @magic-modules you are looking at.',
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
        name: 'theme-list',
        description: 'ThemeList shows a list of all @magic-themes.',
      },
      {
        name: 'theme-vars',
        description: 'ThemeVars shows a preview of all colors used in a @magic-themes.',
      },
      {
        name: 'video-embed',
        description: 'VideoEmbed embeds videos from any video hoster.',
      },
      {
        name: 'xkcd',
        description: 'Xkcd embeds xkcd comics.',
      },
    ],
  })
