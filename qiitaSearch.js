(function() {
  liberator.modules.commands.addUserCommand(
    ["qiita"],
    "search from qiita",
    function(args){
      if (args.length === 0) {
        liberator.echo('input a query!');
        return false;
      }

      // make "and" query
      var query = args.join("+");
      var youtubeUrl = 'http://qiita.com/search?utf8=✓&sort=rel&stocked=1&q='
      // open in a new tab
      liberator.open(youtubeUrl + query, liberator.NEW_TAB);
      return false;
    },
    {},
    true
  );
})();

