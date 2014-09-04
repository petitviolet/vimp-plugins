(function() {
  liberator.modules.commands.addUserCommand(
    ["gplay"],
    "search from Google Play Store",
    function(args){
      if (args.length === 0) {
        liberator.echo('input a query to search at Google Play!');
        return false;
      }

      var query = args.join('%20');
      var googlePlayUrl = 'https://play.google.com/store/search?c=apps&hl=ja&q=' + query
      // open in a new tab
      liberator.open(googlePlayUrl, liberator.NEW_TAB);
      return false;
    },
    {},
    true
  );
})();
