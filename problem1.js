// A Function that accepts a String <str> containing linefeeds, a number <length>, and an array of strings <keywords>. Return an array of substrings that matches the following rules.
// a. Each substring should be a max of <length> characters. Break on the first space that will limit the string to less than length.
// b. Add an empty string for each linefeed.
// c. Add an empty string before each substring that starts with a keyword from keywords.
// d. The returned array should not have any empty strings before the first non-empty string.
// e. Example:
// str =
// Reason: Patient fell and leg appears broken.
// Procedure: Xray of the right leg. 2 rads
// History: Age: 32, Sex: Male, Blah Blah Blah …some more history.
// Impression: The is a 3cm fracture in the Tibia 5cm down from the Patella.\n\rMore medical text and some more.
// Finding: Leg is broken.
// length = 50
// keywords = [‘reason’, ‘procedure’, ‘history’, ‘impression’, ‘finding’, ‘imp’, ‘addendum’]

// Expected result = [
//     'Reason: Patient fell and leg appears broken.',
//     '',
//     '',
//     'Procedure: Xray of the right leg. 2 rads',
//     '',
//     'History: Age: 32, Sex: Male, Blah Blah Blah …some',
//     'more history.',
//     '',
//     '',
//     'Impression: The is a 3cm fracture in the Tibia 5cm',
//     'down from the Patella.',
//     '',
//     'More medical text and some more.',
//     '',
//     '',
//     'Finding: Leg is broken.',
// ]

const readline = require('readline');
var stringRead= []
var arr= []

//read the lines using readline in node
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
})


rl.question('Length?', (answer2) => {
  rl.question('Keywords?', (answer3) =>{
    var remove = answer3.slice(2,-2)
    var ar= remove.split("’, ‘")
    rl.question('String?', (answer1) =>{
      rl.on('line', (answer1) => {
        simplify(answer1,answer2,ar)
      })
    })
  })
})


// attempted solutions:
 // regex matching not a line break, doesn't work since the last line before is read as a line break
  // var lb =  /^$\n/
  //   if (answer1.match(lb)){}
 //setTimeout also ineffective, it was only parsing the first line
 //using prompt node module did a strange thing where it double up each entered line
  // prompt.get(['keywords', 'length', 'str'], (err,result) => {
  //   if(err){return console.log(err)}
  //     simplify(result.str, result.length, result.keywords)
  // })
function simplify(str, length, keywords){
  //check if array is empty
  if (typeof stringRead[0] == 'undefined'){
    //length check
    if(str.length < length){
      stringRead.push(str.substring(0,str.length), "");
      } else {
          stringRead.push(str.substring(0,length), "", str.substring(length, str.length))
      }
  } else {
    //length check
    stringRead.push("")
    if(str.length < length){
      // stringRead.push(`${str.substring(0,str.length)}`);
      for(i=0; i<keywords.length; i++){

        //check if begins with a keyword, if it does, push the empty string before
        if(((str.charAt(0).toLowerCase()+ str.slice(1)).indexOf(keywords[i]))!==-1){
          stringRead.push("")
        }
      }
       stringRead.push(str)
      // }
    } else {
      for(i=0; i<keywords.length; i++){
        //check if begins with a keyword, if it does, push the empty string before
        if(((str.charAt(0).toLowerCase()+ str.slice(1)).indexOf(keywords[i]))!==-1){
          stringRead.push("")
        }
      }
      stringRead.push(str.substring(0,length), str.substring(length, str.length))
    }
  }
  return stringRead
}
 // str =
// Reason: Patient fell and leg appears broken.
// Procedure: Xray of the right leg. 2 rads
// History: Age: 32, Sex: Male, Blah Blah Blah …some more history.
// Impression: The is a 3cm fracture in the Tibia 5cm down from the Patella.\n\rMore medical text and some more.
// Finding: Leg is broken.
// length = 50
// keywords = [‘reason’, ‘procedure’, ‘history’, ‘impression’, ‘finding’, ‘imp’, ‘addendum’]



