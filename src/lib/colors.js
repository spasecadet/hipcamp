/* These brand colors are duplicated in styles/colors.scss.  I prefer using
a css-in-js solution like emotion because it is so nice to be able to define
everything once in js.  I used sass in this projected since it was the 
stated preference, but since I needed the colors available in JS it required 
both a sass and js version of the colors.  */

const colors = {
  // Brand colors
  primary: '#f67280',
  secondary: '#c06c84',
  tertiary: '#6c5b7b',
  quaternary: '#35477d',
};

export default colors;