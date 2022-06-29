<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Text, {TextType, FontWeightText} from './Text.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
    title="Example/Text"
    component={Text}
    argTypes={{
        type: {
            control: 'select',
            options: Object.values(TextType)
        },
        fontWeight: {
            control: 'select',
            options: Object.values(FontWeightText)
        }
    }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <Text {...args}>{args.text}</Text>
</Template>

<Story
    name="Type/H1"
    args={{
        type: TextType.h1,
        text: 'Hello, world!'
    }}
/>

<Story
    name="Type/H2"
    args={{
        type: TextType.h2,
        text: 'Hello, world!'
    }}
/>

<Story
    name="Type/H3"
    args={{
        type: TextType.h3,
        text: 'Hello, world!'
    }}
/>

<Story
    name="Type/H4"
    args={{
        type: TextType.h4,
        text: 'Hello, world!'
    }}
/>

<Story
    name="Type/H5"
    args={{
        type: TextType.h5,
        text: 'Hello, world!'
    }}
/>

<Story
    name="Type/p"
    args={{
        type: TextType.p,
        text: 'Hello, world!'
    }}
/>

<Story
    name="Type/pre"
    args={{
        type: TextType.pre,
        text: 'Hello, world!'
    }}
/>
