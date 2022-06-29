<script lang="ts">
    import {ICONS, Icon} from '../../lib/icons';

    export let icon: Icon = undefined;
    export let width: number | string = undefined;
    export let height: number | string = undefined;
    export let classes = '';
    export let boxed = false;
    export let boxClasses = 'undefined';
    export let boxStyles = '';

    $: selected = ICONS[icon];
</script>

{#if selected}
    {#if boxed}
        <div class="boxed w-8 h-8 flex justify-center items-center {boxClasses}" style={boxStyles}>
            <svg
                data-label="icon"
                class="flex-shrink-0 {classes}"
                width={width || selected.width || '100%'}
                height={height || selected.height || '100%'}
                viewBox="0 0 {selected.width} {selected.height}"
                xmlns="http://www.w3.org/2000/svg"
            >
                {#each selected.path as path}
                    <path
                        class:stroke={path.strokeWidth}
                        class:fixedstrokeColor={path.strokeColor}
                        class:fill-current={!path.strokeWidth && !path.strokeColor}
                        class:stroke-current={path.strokeWidth && !path.strokeColor}
                        d={path.d}
                        fill-rule={path.fillRule || ''}
                        clip-rule={path.clipRule || ''}
                        stroke-width={path.strokeWidth || ''}
                        stroke-linecap={path.strokeLinecap || ''}
                        stroke={path.strokeColor || 'white-100'}
                        opacity={path.opacity || 1}
                        fill={path.fill || ''}
                    />
                {/each}
            </svg>
        </div>
    {:else}
        <svg
            data-label="icon"
            class="flex-shrink-0 {classes}"
            width={width || selected.width || '100%'}
            height={height || selected.height || '100%'}
            viewBox="0 0 {selected.width} {selected.height}"
            xmlns="http://www.w3.org/2000/svg"
        >
            {#each selected.path as path}
                <path
                    class:stroke={path.strokeWidth}
                    class:fixedstrokeColor={path.strokeColor}
                    class:fill-current={!path.strokeWidth && !path.strokeColor}
                    class:stroke-current={path.strokeWidth && !path.strokeColor}
                    d={path.d}
                    fill-rule={path.fillRule || ''}
                    clip-rule={path.clipRule || ''}
                    stroke-width={path.strokeWidth || ''}
                    stroke-linecap={path.strokeLinecap || ''}
                    stroke={path.strokeColor || ''}
                    opacity={path.opacity || 1}
                    fill={path.fill || ''}
                />
            {/each}
        </svg>
    {/if}
{/if}
