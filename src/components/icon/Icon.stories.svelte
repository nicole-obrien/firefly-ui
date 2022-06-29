<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Icon from './Icon.svelte';
    import { Icon as IconName } from '../../lib/icons'
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
    title="Example/Icon"
    component={Icon}
    argTypes={{
        width: {control: 'text'},
        height: {control: 'text'},
        icon: {
            control: 'select',
            options: Object.values(IconName)
        }
    }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <Icon {...args} />
</Template>

<Story
    name="ArrowLeft"
    args={{
        icon: IconName.ArrowLeft,
    }}
/>

<Story
    name="Assembly"
    args={{
        icon: IconName.Assembly
    }}
/>

<Story
    name="Backspace"
    args={{
        icon: IconName.Backspace
    }}
/>

<Story
    name="Bell"
    args={{
        icon: IconName.Bell
    }}
/>

<Story
    name="Biometric"
    args={{
        icon: IconName.Biometric
    }}
/>

<Story
    name="Calendar"
    args={{
        icon: IconName.Calendar
    }}
/>

<Story
    name="Checkbox"
    args={{
        icon: IconName.Checkbox
    }}
/>

<Story
    name="CheckboxRound"
    args={{
        icon: IconName.CheckboxRound
    }}
/>

<Story
    name="CheckboxUnchecked"
    args={{
        icon: IconName.CheckboxUnchecked
    }}
/>

<Story
    name="CheckboxUncheckedRound"
    args={{
        icon: IconName.CheckboxUncheckedRound
    }}
/>

<Story
    name="Checkmark"
    args={{
        icon: IconName.Checkmark
    }}
/>

<Story
    name="ChevronDown"
    args={{
        icon: IconName.ChevronDown
    }}
/>

<Story
    name="ChevronLeft"
    args={{
        icon: IconName.ChevronLeft
    }}
/>

<Story
    name="ChevronRight"
    args={{
        icon: IconName.ChevronRight
    }}
/>

<Story
    name="ChevronUp"
    args={{
        icon: IconName.ChevronUp
    }}
/>

<Story
    name="Chip"
    args={{
        icon: IconName.Chip
    }}
/>

<Story
    name="Close"
    args={{
        icon: IconName.Close
    }}
/>

<Story
    name="Copy"
    args={{
        icon: IconName.Copy
    }}
/>

<Story
    name="Currency"
    args={{
        icon: IconName.Currency
    }}
/>

<Story
    name="Customize"
    args={{
        icon: IconName.Customize
    }}
/>

<Story
    name="Delete"
    args={{
        icon: IconName.Delete
    }}
/>

<Story
    name="Dev"
    args={{
        icon: IconName.Dev
    }}
/>

<Story
    name="Discord"
    args={{
        icon: IconName.Discord
    }}
/>

<Story
    name="Doc"
    args={{
        icon: IconName.Doc
    }}
/>

<Story
    name="DoubleChevronRight"
    args={{
        icon: IconName.DoubleChevronRight
    }}
/>

<Story
    name="Edit"
    args={{
        icon: IconName.Edit
    }}
/>

<Story
    name="Exclamation"
    args={{
        icon: IconName.Exclamation
    }}
/>

<Story
    name="Export"
    args={{
        icon: IconName.Export
    }}
/>

<Story
    name="File"
    args={{
        icon: IconName.File
    }}
/>

<Story
    name="Firefly"
    args={{
        icon: IconName.Firefly
    }}
/>

<Story
    name="Help"
    args={{
        icon: IconName.Help
    }}
/>

<Story
    name="Hide"
    args={{
        icon: IconName.Hide
    }}
/>

<Story
    name="History"
    args={{
        icon: IconName.History
    }}
/>

<Story
    name="Info"
    args={{
        icon: IconName.Info
    }}
/>

<Story
    name="InfoFilled"
    args={{
        icon: IconName.InfoFilled
    }}
/>

<Story
    name="Iota"
    args={{
        icon: IconName.Iota
    }}
/>

<Story
    name="Language"
    args={{
        icon: IconName.Language
    }}
/>

<Story
    name="Ledger"
    args={{
        icon: IconName.Ledger
    }}
/>

<Story
    name="LedgerApp"
    args={{
        icon: IconName.LedgerApp
    }}
/>

<Story
    name="LedgerAppLegacy"
    args={{
        icon: IconName.LedgerAppLegacy
    }}
/>

<Story
    name="Link"
    args={{
        icon: IconName.Link
    }}
/>

<Story
    name="Lock"
    args={{
        icon: IconName.Lock
    }}
/>

<Story
    name="Lock2"
    args={{
        icon: IconName.Lock2
    }}
/>

<Story
    name="Lock3"
    args={{
        icon: IconName.Lock3
    }}
/>

<Story
    name="Logout"
    args={{
        icon: IconName.Logout
    }}
/>

<Story
    name="Minus"
    args={{
        icon: IconName.Minus
    }}
/>

<Story
    name="Network"
    args={{
        icon: IconName.Network
    }}
/>

<Story
    name="Parchment"
    args={{
        icon: IconName.Parchment
    }}
/>

<Story
    name="Play"
    args={{
        icon: IconName.Play
    }}
/>

<Story
    name="Plus"
    args={{
        icon: IconName.Plus
    }}
/>

<Story
    name="Profile"
    args={{
        icon: IconName.Profile
    }}
/>

<Story
    name="Qr"
    args={{
        icon: IconName.Qr
    }}
/>

<Story
    name="Radio"
    args={{
        icon: IconName.Radio
    }}
/>

<Story
    name="Receive"
    args={{
        icon: IconName.Receive
    }}
/>

<Story
    name="Refresh"
    args={{
        icon: IconName.Refresh
    }}
/>

<Story
    name="Reset"
    args={{
        icon: IconName.Reset
    }}
/>

<Story
    name="Search"
    args={{
        icon: IconName.Search
    }}
/>

<Story
    name="Security"
    args={{
        icon: IconName.Security
    }}
/>

<Story
    name="Seed"
    args={{
        icon: IconName.Seed
    }}
/>

<Story
    name="Send"
    args={{
        icon: IconName.Send
    }}
/>

<Story
    name="Settings"
    args={{
        icon: IconName.Settings
    }}
/>

<Story
    name="Shield"
    args={{
        icon: IconName.Shield
    }}
/>

<Story
    name="Shimmer"
    args={{
        icon: IconName.Shimmer
    }}
/>

<Story
    name="SmallChevronDown"
    args={{
        icon: IconName.SmallChevronDown
    }}
/>

<Story
    name="SmallChevronLeft"
    args={{
        icon: IconName.SmallChevronLeft
    }}
/>

<Story
    name="SmallChevronRight"
    args={{
        icon: IconName.SmallChevronRight
    }}
/>

<Story
    name="SmallChevronUp"
    args={{
        icon: IconName.SmallChevronUp
    }}
/>

<Story
    name="Speech"
    args={{
        icon: IconName.Speech
    }}
/>

<Story
    name="Staking"
    args={{
        icon: IconName.Staking
    }}
/>

<Story
    name="StatusError"
    args={{
        icon: IconName.StatusError
    }}
/>

<Story
    name="StatusSuccess"
    args={{
        icon: IconName.StatusSuccess
    }}
/>

<Story
    name="SuccessCheck"
    args={{
        icon: IconName.SuccessCheck
    }}
/>

<Story
    name="Sync"
    args={{
        icon: IconName.Sync
    }}
/>

<Story
    name="Theme"
    args={{
        icon: IconName.Theme
    }}
/>

<Story
    name="ThemeDark"
    args={{
        icon: IconName.ThemeDark
    }}
/>

<Story
    name="ThemeLight"
    args={{
        icon: IconName.ThemeLight
    }}
/>

<Story
    name="Timer"
    args={{
        icon: IconName.Timer
    }}
/>

<Story
    name="Tokens"
    args={{
        icon: IconName.Tokens
    }}
/>

<Story
    name="Tools"
    args={{
        icon: IconName.Tools
    }}
/>

<Story
    name="Transfer"
    args={{
        icon: IconName.Transfer
    }}
/>

<Story
    name="Unlock"
    args={{
        icon: IconName.Unlock
    }}
/>

<Story
    name="View"
    args={{
        icon: IconName.View
    }}
/>

<Story
    name="Voting"
    args={{
        icon: IconName.Voting
    }}
/>

<Story
    name="Wallet"
    args={{
        icon: IconName.Wallet
    }}
/>

<Story
    name="Warning"
    args={{
        icon: IconName.Warning
    }}
/>

<Story
    name="WarningFilled"
    args={{
        icon: IconName.WarningFilled
    }}
/>

<Story
    name="Wifi"
    args={{
        icon: IconName.Wifi
    }}
/>

<Story
    name="Work"
    args={{
        icon: IconName.Work
    }}
/>
