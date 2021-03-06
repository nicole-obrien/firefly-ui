import '../src/tailwind.css';

export const globalTypes = {
    darkMode: false
};

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    previewTabs: {
        'storybook/docs/panel': {index: -1}
    }
};
