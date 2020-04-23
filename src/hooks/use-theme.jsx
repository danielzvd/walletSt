import React, { useCallback, useContext } from 'react';

export const themes = {
  default: {
    name: 'default',
    textColor: '#595959',
    subTextColor: '#959595',
    primaryColor: '#5372ff',
    secondaryColor: '#899eff',
    backgroundColor: '#FFFFFF',
    cardColor: '#f2f4ff',
    successColor: '#39a300',
    dangerColor: '#ff0000',
    warningColor: '#e09e02',
    acoesColor: '#ff0084',
    etfColor: '#006aff',
    fundoImbColor: '#ea00ff',
    tesouroDirColor: '#ffaa00',
    dateAndHourColor: '#9c9c9c',
  },
  modern: {
    name: 'modern',
  },
};

const initialState = {
  theme: themes.default,
  change: () => {},
};

const ThemeContext = React.createContext(initialState);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(themes.default);

  const change = useCallback((name) => {
    setTheme(themes[name]);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, change }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
