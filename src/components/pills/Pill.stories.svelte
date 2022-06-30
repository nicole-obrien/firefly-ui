<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Pill from './Pill.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Example/Pills/Pill" component={Pill} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <div class="flex items-center justify-center">
        <Pill {...args} />
    </div>
</Template>

<Story
    name="Default"
    args={{
        data: 'data'
    }}
/>
