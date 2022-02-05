/*
    Components' themes collection
    Responsible of defining the color schema of the components globally (with a default) and individually (by prop)
*/

import Config from '../config';

export const themeOptions = {
  recomenda2: 'recomenda2',
  blue: 'blue',
};

interface ITheme {
  white: string;
  primary: string;
  primary70: string;
  primary50: string;
  primary40: string;
  primary30: string;
  primary10: string;
  secondary: string;
  secondary90: string;
  secondary70: string;
  secondary50: string;
  secondary30: string;
  secondary10: string;
  additional: string;
  information: string;
  approved: string;
  warning: string;
  error: string;
  neutral40: string;
  information40: string;
  approved40: string;
  warning40: string;
  error40: string;
  overlay: string;
  elevation: string;
  text: string;
  text70: string;
  text50: string;
  text40: string;
  text30: string;
}

export const ThemeColors: any = {
  // White
  white: {
    recomenda2: '#FFF2F9',
    blue: 'rgb(255, 255, 255)',
  },
  // Primary
  primary: {
    recomenda2: '#FA4EAB',
    blue: 'rgb(0, 85, 184)',
  },
  primary70: {
    recomenda2: '#FE83C6',
    blue: 'rgb(58, 121, 194)',
  },
  primary50: {
    recomenda2: '#7F888F',
    blue: 'rgb(102, 149, 204)',
  },
  primary40: {
    recomenda2: '#969DA4',
    blue: 'rgb(129, 168, 214)',
  },
  primary30: {
    recomenda2: '#D0D3D6',
    blue: 'rgb(199, 216, 235)',
  },
  primary10: {
    recomenda2: '#F2F3F4',
    blue: 'rgb(233, 238, 245)',
  },
  // Secondary
  secondary: {
    recomenda2: '#323232',
    blue: 'rgb(0, 85, 184)',
  },
  secondary90: {
    recomenda2: '#EE8F3C',
    blue: 'rgb(19, 100, 194)',
  },
  secondary70: {
    recomenda2: '#F2AB6D',
    blue: 'rgb(58, 121, 194)',
  },
  secondary50: {
    recomenda2: '#F7C79D',
    blue: 'rgb(102, 149, 204)',
  },
  secondary30: {
    recomenda2: '#FADCC2',
    blue: 'rgb(199, 216, 235)',
  },
  secondary10: {
    recomenda2: '#FDF1E7',
    blue: 'rgb(233, 238, 245)',
  },
  // Complemetary
  additional: {
    recomenda2: '#7A0BC0',
  },
  // Semantics
  information: {
    recomenda2: '#0267A1',
    blue: 'rgb(42, 0, 249)',
  },
  approved: {
    recomenda2: '#177531',
    blue: 'rgb(119, 162, 30)',
  },
  warning: {
    recomenda2: '#FDB426',
    blue: 'rgb(255, 175, 11)',
  },
  error: {
    recomenda2: '#A90B0B',
    blue: 'rgb(195, 0, 0)',
  },
  // Semantics - 40
  neutral40: {
    recomenda2: '#CDCBCB',
    blue: 'rgba(140, 138, 138, 0.4)',
  },
  information40: {
    recomenda2: '#9FD5F5',
    blue: 'rgb(175, 149, 255)',
  },
  approved40: {
    recomenda2: '#9AEC8F',
    blue: 'rgb(196, 220, 159)',
  },
  warning40: {
    recomenda2: '#FFE795',
    blue: 'rgb(255, 223, 147)',
  },
  error40: {
    recomenda2: '#FFB4B4',
    blue: 'rgb(244, 149, 151)',
  },
  // Overlay
  overlay: {
    recomenda2: 'rgba(18, 18, 18, 0.85)',
    blue: 'rgba(18, 18, 18, 0.85)',
  },
  // shadow
  elevation: {
    recomenda2: 'rgb(72, 95, 127)',
    //MISSING
    blue: 'rgb(72, 95, 127)',
  },
  //Texts
  text: {
    recomenda2: '#293845',
    blue: 'rgb(18, 18, 18)',
  },
  text70: {
    recomenda2: '#4D5A65',
    blue: 'rgb(57, 56, 56)',
  },
  text50: {
    recomenda2: '#7F888F',
    blue: 'rgb(113, 109, 109)',
  },
  text40: {
    recomenda2: '#969DA4',
    blue: 'rgb(140, 138, 138)',
  },
  text30: {
    recomenda2: '#D0D3D6',
    blue: 'rgb(205, 203, 203)',
  },
};

export const getTheme = (themeName: string = Config.defaultTheme) => {
  let Theme: any = {};
  for (let key in ThemeColors) {
    if (ThemeColors[key][themeName]) {
      Theme[key] = ThemeColors[key][themeName];
    } else {
      // Fill the missing colors in a theme with the default theme values
      Theme[key] = ThemeColors[key][Config.defaultTheme];
    }
  }

  const theme: ITheme = Theme;
  return theme;
};
