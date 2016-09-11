(function() {
  liberator.modules.commands.addUserCommand(
    ["hatenaMyTag", "hatenaMyTag", "hmt"],
    "search from hatena my bookmarks by tags",
    function(args){
      if (args.length === 0) {
        liberator.echo('input a tag!');
        return false;
      }

      // make "and" query
      var query = args.join("+");
      var hatenaTagUrl = 'http://b.hatena.ne.jp/my/'
      // open in a new tab
      liberator.open(hatenaTagUrl + query, liberator.NEW_TAB);
      return false;
    },
    {},
    true
  );
})();

