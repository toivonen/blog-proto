({
    block: 'b-page',
    title: 'Article',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_article.css', ie: false },
        { elem: 'css', url: '_article', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            block: 'header'
        },
        {
            block: 'layout',
            content: [
                {
                    block: 'main',
                    content: [
                        {
                            block: 'article',
                            title: 'The Case of The Wonderful Button',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        }
                    ]
                },
                {
                    block: 'sidebar',
                    content: [
                        {
                            block: 'b-menu-vert',
                            mix: [{ block: 'box' }, { block: 'box', elem: 'body'}],
                            content: [
                                {
                                    elem: 'title',
                                    mix: { block: 'box', elem: 'title'},
                                    content: 'On this site'
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'Blog'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'Articles and talks'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'About me'
                                    }
                                }
                            ]
                        },
                        {
                            block: 'github',
                            js: { user: 'toivonen' }
                        }
                    ]
                },
                {
                    block: 'prompting',
                    content: [
                        {
                            block: 'social-ico',
                            url: '#'
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            content: [
                'test here'
            ]
        },
        { block: 'custom-fonts' },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_article.js' }
    ]
})
