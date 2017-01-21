(function() {
  liberator.modules.commands.addUserCommand(
    ["yankmarkdown", 'ymd'],
    "yank webpage title and url as markdown",
    function(args){
      var title = buffer.title;
      var url = buffer.URL;
      var selection = new XPCNativeWrapper(window.content.window).getSelection().toString();
      var markdown = "";
      // liberator.echo(`selection: ${selection} type: ${typeof selection} length: ${selection.length}`);
      if (typeof selection === "undefined" || selection.length === 0) {
        markdown = `[${title}](${url})`;
      } else {
        markdown = `[${selection}](${url})`;
      }
      util.copyToClipboard(markdown);
      return false;
    },
    {},
    true
  );
})();

