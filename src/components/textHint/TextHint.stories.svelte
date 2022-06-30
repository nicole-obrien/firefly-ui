<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import TextHint from './TextHint.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Example/TextHint" component={TextHint} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <div class="flex items-center justify-center">
        <TextHint {...args} />
    </div>
</Template>

<Story
    name="Variant/Primary"
    args={{
        primary: true,
        text: 'This is a primary text hint'
    }}
/>

<Story
    name="Variant/Secondary"
    args={{
        secondary: true,
        text: 'This is a secondary text hint'
    }}
/>

<Story
    name="Variant/Success"
    args={{
        success: true,
        text: 'This is a success text hint'
    }}
/>

<Story
    name="Variant/Danger"
    args={{
        danger: true,
        text: 'This is a danger text hint'
    }}
/>

<Story
    name="Variant/Warning"
    args={{
        warning: true,
        text: 'This is a warning text hint'
    }}
/>

<Story
    name="Variant/Info"
    args={{
        info: true,
        text: 'This is a info text hint'
    }}
/>
