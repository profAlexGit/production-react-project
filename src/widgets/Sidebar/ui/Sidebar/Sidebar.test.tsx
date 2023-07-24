import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from '@widgets/Sidebar';
import { componentRender } from '@shared/lib/tests/componentRender/componentRender';

const routes = {
  route: '/'
};

describe('Sidebar', () => {
  it('Sidebar render', () => {
    componentRender(<Sidebar />, routes);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('Sidebar toggle', () => {
    componentRender(<Sidebar />, routes);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
