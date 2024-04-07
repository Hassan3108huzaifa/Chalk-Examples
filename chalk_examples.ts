// Import chalk library
import chalk from 'chalk';

// Simple use of chalk
console.log(chalk.blue('Hello, world!'));

// Colorful text
console.log(chalk.red('Error!'), chalk.yellow('Warning!'), chalk.green('Success!'));

// Styling text
console.log(chalk.bold('This is bold text.'));
console.log(chalk.italic('This is italic text.'));
console.log(chalk.underline('This is underlined text.'));
console.log(chalk.dim('This is dim text.'));
console.log(chalk.inverse('This is inverted text.'));

// Combining styles
console.log(chalk.bold.italic('Bold and italic text.'));
console.log(chalk.red.bgYellow.bold('Red text on yellow background.'));
console.log(chalk.blueBright.bgWhite('Blue bright text on white background.'));

// Chaining styles
console.log(chalk.red.bgYellow.bold.italic('Red text on yellow background, bold and italic.'));

// Creating custom styles
const error = chalk.bold.red;

// Using named colors
const warning = chalk.yellow;
console.log(warning('Warning!'));

console.log(error('Error!'), warning('Warning!'));

// Using templates
const name = 'John';
console.log(chalk`Hello, {bold.blue ${name}}!`);

// Nesting styles
console.log(chalk.red('This is red', chalk.underline('and underlined')));

// Disable chalk styles
chalk.level = 0;
console.log(chalk.green('This text will not be styled'));

// Re-enable chalk styles
chalk.level = 1;
console.log(chalk.green('This text will be styled again'));


// Using RGB values
const customColor = chalk.rgb(255, 165, 0); // RGB for orange color
console.log(customColor('Custom color!'));
