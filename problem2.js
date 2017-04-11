// A Function that accepts an object { ‘firstName’: ‘John’, ‘lastName’: ‘Doe’, ‘site’: ‘Cleveland VA’ } and returns a string.
// a.       Data:
// Name: ‘John Doe’, Site: ‘cleveland va’, Pid: 123
// Name: ‘Jane Mary Doe’, Site: ‘cleveland va’, Pid: 456
// Name: ‘John Doe’, Site: ‘north chicago va’, Pid: 321
// Name: ‘Jane Doe’, Site: ‘north chicago va’, Pid: 888
// Name: ‘John Henry Doe’, Site: ‘bronx va’, Pid: 777

// b.      Example return for { ‘firstName’: ‘John’, ‘lastName’: ‘Doe’, ‘site’: ‘Cleveland VA’ }
// return 123^DOE^JOHN^
// Format: PID^LAST^FIRST^MIDDLE
// c.       You can format, store, access the data however you like. The data would technically come from an SQL query.

var pgp= require("pg-promise")(); //include the extra parenthesis to invoke
var db = pgp("postgres://username@localhost:5432/Data");

function checkDB(obj){
  var storage = [];
  var fullName = `${obj.firstName} ${obj.lastName}`
  //generally this would depend on information you're looking for, here I can use pg promise,
  //but I would modify the search results depending on what information's given, in this case, the full name
  db.one("SELECT * FROM Data WHERE Name = $1", [req.params.fullName])
    .then(data => storage.push(res.json(data)))
  //returned data should look like this
  //var storage= [{Name: ‘John Doe’, Site: ‘cleveland va’, Pid: 123}]
  var Pid = storage[0].Pid
  return `${obj.Pid}^${obj.lastName}^${obj.firstName}^${obj.Site}`
}


