import { jsx as _jsx } from "react/jsx-runtime";
import { Theme } from '@app/providers/ThemeProvider';
export function ThemeDecorator(theme = Theme.LIGHT) {
    return (StoryComponent) => (_jsx("div", { className: `app ${theme}`, children: _jsx(StoryComponent, {}) }));
}
