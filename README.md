# valor
1)      A Function that accepts a String <str> containing linefeeds, a number <length>, and an array of strings <keywords>. Return an array of substrings that matches the following rules.
a.       Each substring should be a max of <length> characters. Break on the first space that will limit the string to less than length.
b.      Add an empty string for each linefeed.
c.       Add an empty string before each substring that starts with a keyword from keywords.
d.      The returned array should not have any empty strings before the first non-empty string.
e.      Example: 
str = 
Reason: Patient fell and leg appears broken. 
Procedure: Xray of the right leg. 2 rads
History: Age: 32, Sex: Male, Blah Blah Blah …some more history.
Impression: The is a 3cm fracture in the Tibia 5cm down from the Patella.\n\rMore medical text and some more.
Finding: Leg is broken.
length = 50
keywords = [‘reason’, ‘procedure’, ‘history’, ‘impression’, ‘finding’, ‘imp’, ‘addendum’]

Expected result = [
    'Reason: Patient fell and leg appears broken.',
    '',
    '',
    'Procedure: Xray of the right leg. 2 rads',
    '',
    'History: Age: 32, Sex: Male, Blah Blah Blah …some',
    'more history.',
    '',
    '',
    'Impression: The is a 3cm fracture in the Tibia 5cm',
    'down from the Patella.',
    '',
    'More medical text and some more.',
    '',
    '',
    'Finding: Leg is broken.',
]



2)      A Function that accepts an object { ‘firstName’: ‘John’, ‘lastName’: ‘Doe’, ‘site’: ‘Cleveland VA’ } and returns a string.
a.       Data: 
Name: ‘John Doe’, Site: ‘cleveland va’, Pid: 123
Name: ‘Jane Mary Doe’, Site: ‘cleveland va’, Pid: 456
Name: ‘John Doe’, Site: ‘north chicago va’, Pid: 321
Name: ‘Jane Doe’, Site: ‘north chicago va’, Pid: 888
Name: ‘John Henry Doe’, Site: ‘bronx va’, Pid: 777

b.      Example return for { ‘firstName’: ‘John’, ‘lastName’: ‘Doe’, ‘site’: ‘Cleveland VA’ }
return 123^DOE^JOHN^
Format: PID^LAST^FIRST^MIDDLE
c.       You can format, store, access the data however you like. The data would technically come from an SQL query.
