(function() {
  liberator.modules.commands.addUserCommand(
    ["hoo[gle]"],
    "search from hoogle",
    function(args){
      if (args.length === 0) {
        liberator.echo('input a query!');
        return false;
      }

      // make "and" query
      var query = args.join("+");
      var youtubeUrl = 'https://www.haskell.org/hoogle/?hoogle='
      // open in a new tab
      liberator.open(youtubeUrl + query, liberator.NEW_TAB);
      return false;
    },
    {},
    true
  );
})();

