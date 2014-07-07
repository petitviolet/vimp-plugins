(function() {
  liberator.modules.commands.addUserCommand(
    ["git[hubSearch]"],
    "search from github repository, usage like 'git[hubSearch] petitviolet/vimp-plugings'",
    function(args){
      if (args.length === 0) {
        liberator.echo('input a query like [username]/[repository]!');
        return false;
      }

      // var query = args[0].split('/');
      var query = args[0];
      var githubUrl = 'https://github.com/' + query;
      // open in a new tab
      liberator.open(githubUrl, liberator.NEW_TAB);
      return false;
    },
    {},
    true
  );
})();
