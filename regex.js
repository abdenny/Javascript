////////////////Regex

// let regex = new RegExp('digitalcrafts');
// let regex2 = /digitalcrafts/;
// let someString = 'hgfdhsgdigitalcraftsfsbdfhsbfsdhfhsd';
// let result = regex.test(someString);
// console.log(result);

//test() checks for a match, returns True or False - works on pattern
//exec() checks for a match, returns the first match - works on pattern

//Methods that can be used with REGEX:
//toString() - returns the string value of the regular expression
// replace(1,2) - method on the string. Takes two args, what you want to find, and what you want to replace
// match() - method on the string
// matchAll()
////i after expression to make case insensitive
////g after expression makes global

// let pattern = /Austin/gi;
// let someString1 = 'jfdbfbshAustinDFHD';
// let result = pattern.test(someString1);
// console.log(result);

// let arr = someString1.match(pattern);
// console.log(arr);

// let arr2 = someString1.replace(pattern, 'brian');
// console.log(arr2);

// let pattern = /Batman | Tina Fey/g;
// let string = 'Batman is really cool, but not as cool as Tina Fey';
// let result = string.match(pattern);
// console.log(result);

//333-333-3333
// let phonePattern = /\d\d\d-\d\d\d-\d\d\d\d/g;
// let someString =
//   'ufdgdgfvdsgfvds 333-333-3333 dfhbshfbdsh 423-605-7777 dhgbfhbdg';
// let result = someString.match(phonePattern);
// console.log(result);

////////// Grouping with parens (doesnt work with global)
//333-333-3333
// let phonePattern = /(\d\d\d)-(\d\d\d)-(\d\d\d\d)/;
// let someString =
//   'ufdgdgfvdsgfvds 333-333-3333 dfhbshfbdsh 423-605-7777 dhgbfhbdg';
// let result = someString.match(phonePattern);
// console.log(result);

// ////Grouping with pipes
// let pattern = /Bat(man|woman|mobile|copter|bat)/;
// let string = 'Batwoman is so cool.';
// let result = string.match(pattern);
// console.log(result);

////Optional matching with '? '
// let pattern = /\d\d\d(-)?(.)?\d\d\d(-)?(.)?\d\d\d\d/;
// let string = 'this is a phonenumber: 333.333.3333';
// let result = string.match(pattern);
// console.log(result);

///// * - preceded by bat, followed by man, return as many as there are
// let pattern = /Bat(wo)*man/g;
// let string = 'Batwoman Batman Batwowowowoman is so cool.';
// let result = string.match(pattern);
// console.log(result);

///// + is very similair - Must be preceded by bat, followed by man
// let pattern = /Bat(wo)+man/g;
// let string = 'Batwoman Batman Batwowowowoman is so cool.';
// let result = string.match(pattern);
// console.log(result);

//Cheat Sheet - https://www.debuggex.com/cheatsheet/regex/javascript
// /^\d+$/
// >number

// /^[ \s]+/
// whitespace at start of line

// /[^@]+@[^@]+/
// email

// /^#[a-fA-F0-9]{6}$/
// hex color value

// /^(\d{2}\/\d{2}\/\d{4})|(\d{4}=\d{2}-\d{2})$/
// date yy-mm-dd

// a — matches one character that is a (not b, not aa, etc.)
// abc — matches a, followed by b, followed by c.
// a* — matches the character a, zero or more times
// + matches a character one or more times
// [^a] — matches one character that is not a.
// a{5,7} — matches a, 5 to 7 times, but no less or more.
