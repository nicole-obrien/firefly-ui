<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Box from './Box.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Example/Boxes/Box" component={Box} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <div class="flex items-center justify-center">
        <Box {...args}>Hello, World!</Box>
    </div>
</Template>

<Story name="Default" args={{}} />

<Story
    name="BackgroundColor"
    args={{
        backgroundColor: 'green-300'
    }}
/>

<Story
    name="ClearBackground"
    args={{
        clearBackground: true
    }}
/>

<Story
    name="ClearPadding"
    args={{
        clearPadding: 'true'
    }}
/>

<Story name="Column">
    <Box col>
        <div>Row 1</div>
        <div>Row 2</div>
    </Box>
</Story>

<Story name="Row">
    <Box row>
        <div>Col 1</div>
        <div>Col 2</div>
    </Box>
</Story>
