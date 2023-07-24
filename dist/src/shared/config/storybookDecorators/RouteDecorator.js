import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
export function RouteDecorator(StoryComponent) {
    return (_jsx(BrowserRouter, { children: _jsx(StoryComponent, {}) }));
}
