<script lang="ts">
    import {Text} from '../text';
    import Box from './Box.svelte';

    export let key = '';
    export let value = '';
    export let textColor = 'gray-600';
    export let darkTextColor = 'gray-500';
    export let backgroundColor = 'gray-50';
    export let darkBackgroundColor = 'gray-850';
    export let padding = 'px-4 py-3.5';
    export let classes = '';
</script>

<Box row clearPadding {backgroundColor} {darkBackgroundColor} classes="justify-between {padding} {classes}">
    {#if key}
        <Text fontSize="14" lineHeight="5" color={textColor} darkColor={darkTextColor}>
            {key}
        </Text>
    {:else}
        <slot name="key" />
    {/if}
    {#if value}
        <Text fontSize="14" lineHeight="5" color={textColor} darkColor={darkTextColor}>
            {value}
        </Text>
    {:else}
        <slot name="value" />
    {/if}
</Box>
