import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('ReferenceTeaserWidget', {
    title: 'Reference Teaser',
    description: 'A teaser from a reference to another page',
    attributes: {
        page: {
            title: 'Page',
            description: "A reference to another page.",
        },
    },
    properties: [
        'page',
    ],
});