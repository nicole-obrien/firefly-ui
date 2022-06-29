<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Box from './Box.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Example/Boxes/Box" component={Box} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <Box {...args}>
        <slot />
    </Box>
</Template>

<Story name="Default" args={{}} />

<Story name="ClearPadding">
    <Box clearPadding>This is a box</Box>
</Story>

<Story name="ClearBackground">
    <Box clearBackground>This is a box</Box>
</Story>

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
        <div>Col 2</div>
    </Box>
</Story>
