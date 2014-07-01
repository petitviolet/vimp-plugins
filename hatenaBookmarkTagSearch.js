(function() {
  liberator.modules.commands.addUserCommand(
    ["hatenaTag", "hatena", "ht"],
    "search from hatena bookmarks by tags",
    function(args){
      if (args.length === 0) {
        liberator.echo('input a query!');
        return false;
      }

      // make "and" query
      var query = args.join("+");
      var hatenaTagUrl = 'http://b.hatena.ne.jp/search/tag?safe=on&sort=recent&q='
      // open in a new tab
      liberator.open(hatenaTagUrl + query, liberator.NEW_TAB);
      return false;
    },
    {},
    true
  );
})();

