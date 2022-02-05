type Typography = {
    regular: string;
    bold: string;
  };
  
  const DEFAULT_REGULAR = 'Poppins-Regular';
  const DEFAULT_BOLD = 'Poppins-Bold';
  const DEFAULT_THEME = 'recomenda2';
  
  class Config {
    private static _instance: Config | null = null;
  
    private _typography: Typography = {
      regular: DEFAULT_REGULAR,
      bold: DEFAULT_BOLD,
    };
    private _defaultTheme = DEFAULT_THEME;
  
    static get instance(): Config {
      if (this._instance === null) {
        this._instance = new Config();
      }
      return this._instance;
    }
  
    get typography(): Typography {
      return this._typography;
    }
  
    set typography(typography: Typography) {
      this._typography = typography;
    }
  
    get defaultTheme(): string {
      return this._defaultTheme;
    }
  
    set defaultTheme(theme: string) {
      this._defaultTheme = theme;
    }
  }
  
  export default Config.instance;
  