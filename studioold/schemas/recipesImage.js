export default {
    name: 'recipesImage',
    title: 'Recipes Image',
    type: 'image',
    fields: [
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
            options: {
                isHightLight: true,
            },
        },
    ],
    options: {
        hotspot: true,
    },
}