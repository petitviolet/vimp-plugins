(function() {
  // change to your hatena user name!!!
  var HATENA_USERNAME = 'petitviolet';
  liberator.modules.commands.addUserCommand(
    ["hatebu", "hb"],
    "search from my hatena bookmarks",
    function(args){
      if (args.length === 0) {
        liberator.echo('input a query!');
        return false;
      }

      // make "and" query
      var query = args.join("+");
      var hatenaUrl = 'http://b.hatena.ne.jp/' + HATENA_USERNAME + '/search?q=';
      // open in a new tab
      liberator.open(hatenaUrl + query, liberator.NEW_TAB);
      return false;
    },
    {},
    true
  );
})();
