export const COLLAPSED_SIDEBAR_WIDTH = 80;
export const EXPANDED_SIDEBAR_WIDTH = 80;
export const APP_HEADER_HEIGHT = 60;

export const SEVERITY_COLORS = [null, 'green', 'cyan', 'gold', 'red'];

const green = '82, 196, 26';
const cyan = '19, 194, 194';
const gold = '250, 173, 20';
const red = '245, 34, 45';

export const SEVERITY_COLOR_CODES = [
   'rgba(0, 0, 0, 0.65)',
   `rgb(${green})`,
   `rgb(${cyan})`,
   `rgb(${gold})`,
   `rgb(${red})`
];
export const COLORS = {
   green: `rgb(${green})`,
   greenOp: (opacity = 1) => `rgba(${green}, ${opacity})`,
   cyan: `rgb(${cyan})`,
   cyanOp: (opacity = 1) => `rgba(${cyan}, ${opacity})`,
   gold: `rgb(${gold})`,
   goldOp: (opacity = 1) => `rgba(${gold}, ${opacity})`,
   red: `rgb(${red})`,
   redOp: (opacity = 1) => `rgba(${red}, ${opacity})`,
   primary: `rgb(${process.env.REACT_APP_PRIMARY_COLOR})`,
   primaryOp: (opacity = 1) => `rgba(${process.env.REACT_APP_PRIMARY_COLOR}, ${opacity})`,
   black: `rgb(0,0,0)`,
   blackOp: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
   blue: 'rgba(24, 144, 255, 1)',
   blueOp: opacity => `rgba(24, 144, 255, ${opacity})`,
   white: 'rgba(255, 255, 255, 1)',
   whiteOp: opacity => `rgba(255, 255, 255, ${opacity})`
};
