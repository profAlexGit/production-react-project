import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  document.body.className = theme;

  const toggleTheme = (): void => {
    let newTheme: Theme = Theme.LIGHT;
    if (theme === Theme.DARK) {
      newTheme = Theme.LIGHT;
    }

    if (theme === Theme.LIGHT) {
      newTheme = Theme.ORANGE;
    }

    if (theme === Theme.ORANGE) {
      newTheme = Theme.DARK;
    }

    if (setTheme) {
      setTheme(newTheme);
    }
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme
  };
}
