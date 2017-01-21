(function() {
  liberator.modules.commands.addUserCommand(
    ["yankmarkdown", 'ymd'],
    "yank webpage title and url as markdown",
    function(args){
      var url = buffer.URL;
      var markdown = makeMarkdownString(window, url);
      // liberator.echo(`selection: ${selection} type: ${typeof selection} length: ${selection.length}`);
      util.copyToClipboard(markdown);

      liberator.echo(`yanked! ${markdown}`);

      return false;
    },
    {},
    true
  );
})();

function makeMarkdownString(window, url) {
  var selection = getSelection(window);
  var markdown = "";
  if (typeof selection === "undefined" || selection.length === 0) {
    var title = buffer.title;
    if (isGithub(url)) {
      // [petitviolet/vimp-plugins: My Vimperator plugins]
      //   -> [petitviolet/vimp-plugins]
      // [vimp-plugins/yankMarkdown.js at master · petitviolet/vimp-plugins](https://github.com/petitviolet/vimp-plugins/blob/master/yankMarkdown.js)
      //   -> [petitviolet/vimp-plugins/yankmarkdown.js]
      title = extractGithubTitle(url);
    }
    markdown = `[${title}](${url})`;
  } else {
    markdown = `[${selection}](${url})`;
  }
  return markdown;
}

function getSelection(window) {
  var selection = new XPCNativeWrapper(window.content.window).getSelection().toString();
  return selection;
}

function isGithub(url) {
  return url.includes("github.com");
}

function extractGithubTitle(url) {
  var segments = url.split('/');
  var title = "";
  if (segments.length === 5) {
    // repository top
    // https://github.com/petitviolet/vimp-plugins
    // -> petitviolet/vimp-plugins
    title = githubRepository(segments);
  } else if (segments.length > 5) {
    // a file in a repository
    // https://github.com/petitviolet/vimp-plugins/blob/master/yankMarkdown.js
    // -> petitviolet/vimp-plugins/yankmarkdown.js
    var repo = githubRepository(segments);
    var file = segments[segments.length - 1];
    title = `${repo}/${file}`;
  }

  if (title[title.length - 1] === "/") {
    // trim trailing `/`
    title = title.slice(0, title.length - 1);
  }
  return title;
}

function githubRepository(segments) {
    return segments.slice(3, 5).join('/');
}
