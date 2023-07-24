import { render, screen } from '@testing-library/react';
import { Button, SizeButton, ThemeButton } from '@shared/ui/Button/Button';

describe('Button', () => {
  it('Button render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('Render Button with "clear" theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });

  it('Render Button with "background" theme', () => {
    render(<Button theme={ThemeButton.BACKGROUND}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('background');
  });

  it('Render Button with "inverted background" theme', () => {
    render(<Button theme={ThemeButton.BACKGROUND_INVERTED}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('backgroundInverted');
  });

  it('Render Button with size "m"', () => {
    render(<Button size={SizeButton.M}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('size_m');
  });

  it('Render Button with size "l"', () => {
    render(<Button size={SizeButton.L}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('size_l');
  });

  it('Render Button with size "xl"', () => {
    render(<Button size={SizeButton.XL}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('size_xl');
  });
});
