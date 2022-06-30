<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import KeyValueBox from './KeyValueBox.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Example/Boxes/KeyValueBox" component={KeyValueBox} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <div class="flex items-center justify-center">
        <KeyValueBox {...args} />
    </div>
</Template>

<Story
    name="Default"
    args={{
        key: 'key',
        value: 'value'
    }}
/>
