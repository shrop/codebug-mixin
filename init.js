// Open current document/file in Codebug.
Hooks.addMenuItem("Go/Open in Codebug", "shift-cmd-x", function() {
  var exec = require('child_process').exec;
  var documentPath = Document.current().path();
  
  exec('open -a Codebug ' + documentPath, function (err, stdout, stderr) {
    if (err)  {
      Alert.show(err);
      return false;
    }
    else {
      Alert.notify({
        title: "Opened file in Codebug",
        body: "Opened " + documentPath + ""
      });
    };
  });
});
