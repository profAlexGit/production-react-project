import { type ReactNode } from 'react';
import { render, type RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';

export interface componentRenderOptions {
  route: string;
}

export function componentRender (component: ReactNode, options: componentRenderOptions): RenderResult {
  const {
    route = '/'
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  );
}
