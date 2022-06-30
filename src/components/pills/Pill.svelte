<script lang="ts">
    import Text, {FontWeightText} from '../text/Text.svelte';

    export let data = '';
    export let textColor = 'gray-800';
    export let darkTextColor = 'gray-800';
    export let backgroundColor = 'gray-300';
    export let darkBackgroundColor = 'gray-300';
    export let classes = '';
    export let textClasses = '';
</script>

<pill
    class={`
        flex-none
        px-2.5 py-1 rounded-2xl
        ${backgroundColor ? 'bg-' + backgroundColor : ''}
        ${darkBackgroundColor ? 'dark:bg-' + darkBackgroundColor : ''}
        ${classes}
    `}
>
    <Text
        smaller
        fontWeight={FontWeightText.semibold}
        color={textColor}
        darkColor={darkTextColor || textColor}
        classes={`

            ${textClasses}
        `}
    >
        {#if data}
            {data}
        {:else}
            <slot />
        {/if}
    </Text>
</pill>
