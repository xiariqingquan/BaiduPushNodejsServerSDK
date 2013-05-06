
var id0 = '1100801892847586532';
var id1 = '';
function queryBindList(client) {
  var opt = {
    user_id: id0
  }
  client.queryBindList(opt, function(err, result) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  })
}

function pushMsg(client) {
  var opt = {
    push_type: 1,
    user_id: id0,
    messages: JSON.stringify(["hello, push0", "hello, push1", "hello, push2"]),
    msg_keys: JSON.stringify(["key0", "key1", "key2"])
  }
  client.pushMsg(opt, function(err, result) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  })
}


var Push = require('../index');
(function() {
  var opt = {
   ak: 'your ak here',
   sk: 'your sk here'

  };
  var client = new Push(opt);
   //queryBindList(client);
   pushMsg(client);

})()