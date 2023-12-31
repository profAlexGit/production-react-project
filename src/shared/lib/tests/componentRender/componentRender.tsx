import { type ReactNode } from 'react';
import { render, type RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import i18nForTest from '@shared/config/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';
import { type StateSchema, StoreProvider } from '@app/providers/StoreProvider';
import { type DeepPartial } from 'redux';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export function componentRender (component: ReactNode, options: componentRenderOptions): RenderResult {
  const {
    route = '/',
    initialState
  } = options;

  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>

  );
}
