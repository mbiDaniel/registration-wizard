import { extendTheme } from '@chakra-ui/react';
import { CardComponent } from './additions/card/card';
import { buttonStyles } from './components/button';
import { inputStyles } from './components/input';
import { textareaStyles } from './components/textarea';
import { breakpoints } from './foundations/breakpoints';
import { globalStyles } from './styles';
import { headingStyles } from './components/heading';

const theme =  extendTheme(
	{ breakpoints }, // Breakpoints
	globalStyles,
	headingStyles,
	buttonStyles,
	inputStyles,
	textareaStyles,
	CardComponent
);

export default theme;