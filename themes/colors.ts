export const constant_colors = {
  brand_color: { 1: '#EE7A5B' }
};

export const colors = {
  light: {
    theme_name: 'light',
    background: { 1: '#F8F8F8', 2: '#E0E0E0' },
    text: { 1: '#121212', 2: '#1f1f1f' },
    border_color: { 1: '#E4E4E7', 2: '#D6D6D6' },
    form: { label: '#A3A3A3', color: '#292929' }
  },
  dark: {
    theme_name: 'dark',
    background: { 1: '#232425', 2: '#2C2C2C' },
    text: { 1: '#FFFFFF', 2: '#DDDDDD' },
    border_color: { 1: '#5e5e5e', 2: '#6f6f6f' },
    form: { label: '#FAFAFAE5', color: '#ffffff' }
  },
  darkGreen: {
    theme_name: 'darkGreen',
    background: { 1: '#111B21', 2: '#202C33' },
    text: { 1: '#FFFFFF', 2: '#DDDDDD' },
    border_color: { 1: '#2C3B44', 2: '#3D4C55' },
    form: { label: '#A6A6A6', color: '#ffffff' }
  },
  darkBlue: {
    theme_name: 'darkBlue',
    background: { 1: '#15151E', 2: '#1C1C2A' },
    text: { 1: '#FFFFFF', 2: '#DDDDDD' },
    border_color: { 1: '#2f3652', 2: '#171a26' },
    form: { label: '#A6A6A6', color: '#ffffff' }
  },
  default: {
    theme_name: 'light',
    background: { 1: '#F5F5F5', 2: '#FFFFFF' },
    text: { 1: '#000000', 2: '#191919' },
    border_color: { 1: '#E4E4E7', 2: '#D6D6D6' },
    form: { label: '#A3A3A3', color: '#292929' }
  }
};

export const get_color_pop = (hex: string, background: string) => {
  //hex color
  const hex_string = hex.replace('#', '');
  const hexcolor =
    hex_string?.length === 3
      ? `${hex_string[0]}${hex_string[0]}${hex_string[1]}${hex_string[1]}${hex_string[2]}${hex_string[2]}`
      : hex_string;

  const r1 = parseInt(hexcolor.substr(0, 2), 16);
  const g1 = parseInt(hexcolor.substr(2, 2), 16);
  const b1 = parseInt(hexcolor.substr(4, 2), 16);
  const yiq1 = (r1 * 299 + g1 * 587 + b1 * 114) / 1000;

  //background
  const backgroundHex = background.replace('#', '');
  const backgroundColor =
    backgroundHex?.length === 3
      ? `${backgroundHex[0]}${backgroundHex[0]}${backgroundHex[1]}${backgroundHex[1]}${backgroundHex[2]}${backgroundHex[2]}`
      : backgroundHex;

  const r2 = parseInt(backgroundColor.substr(0, 2), 16);
  const g2 = parseInt(backgroundColor.substr(2, 2), 16);
  const b2 = parseInt(backgroundColor.substr(4, 2), 16);
  const yiq2 = (r2 * 299 + g2 * 587 + b2 * 114) / 1000;

  return yiq1 >= 183 && yiq2 >= 128
    ? '#191919'
    : yiq1 < 100 && yiq2 < 128
    ? '#ffffff'
    : hex;
};

function addAlpha(color: string, opacity: number) {
  // coerce values so it is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

export const get_hex_color_complements = (hex: string, theme: string) => {
  const hex_string = hex.replace('#', '');
  const hexcolor =
    hex_string?.length === 3
      ? `${hex_string[0]}${hex_string[0]}${hex_string[1]}${hex_string[1]}${hex_string[2]}${hex_string[2]}`
      : hex_string;
  console.log(hexcolor);

  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  const color_pop =
    yiq >= 183 && theme === 'light'
      ? '#191919'
      : yiq < 100 && theme !== 'light'
      ? '#ffffff'
      : hex;

  const background =
    theme === 'light' && yiq >= 200
      ? `#${addAlpha('191919', 1)}`
      : theme !== 'light' && yiq <= 100
      ? `#${addAlpha('ffffff', 1)}`
      : 'transparent';

  return {
    primary: hex,
    custom_color: {
      spectrum: yiq >= 183 ? 'light' : 'dark',
      color: hex,
      contrast: yiq >= 128 ? '#191919' : '#ffffff',
      accent: yiq >= 128 ? '#ffffff' : '#191919',
      background,
      dark_background_pop: yiq >= 128 ? hex : '#FFFFFF',
      light_background_pop: yiq >= 128 ? '#191919' : hex,
      opacity: {
        _05: `${hex}0D`,
        _10: `${hex}1A`,
        _20: `${hex}33`,
        _30: `${hex}4D`,
        _40: `${hex}66`,
        _50: `${hex}80`,
        _60: `${hex}99`,
        _70: `${hex}B3`,
        _80: `${hex}cc`,
        _90: `${hex}e6`
      },
      opacity_pop: {
        _05: `${color_pop}0D`,
        _10: `${color_pop}1A`,
        _20: `${color_pop}33`,
        _30: `${color_pop}4D`,
        _40: `${color_pop}66`,
        _50: `${color_pop}80`,
        _60: `${color_pop}99`,
        _70: `${color_pop}B3`,
        _80: `${color_pop}cc`,
        _90: `${color_pop}e6`
      },
      color_pop,
      contrast_pop:
        color_pop === '#ffffff'
          ? '#191919'
          : color_pop === '#191919'
          ? '#ffffff'
          : yiq >= 183
          ? '#191919'
          : '#ffffff'
    }
  };
};
