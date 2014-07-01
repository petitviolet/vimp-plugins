(function() {
  var HandleSpeakerdeck = function() {
    var doc = content.document;
    if (doc.location.host !== 'speakerdeck.com') {
      return liberator.echoerr('This is not speakerdeck...');
    }

    var iframe = doc.wrappedJSObject.querySelector('iframe.speakerdeck-iframe');
    var player = iframe.contentWindow.player;

    return {
      next: function() {
        player.nextSlide();
      },
      prev: function() {
        player.previousSlide();
      },
      fullscreen: function() {
        iframe.mozRequestFullScreen();
      }
    }
  };

  liberator.modules.commands.addUserCommand(
    ['speakerdeck'],
    'Speakerdeck controller',
    function() {},
    {
      subCommands: [
        new Command(['n[ext]'], 'Go next page', function() {HandleSpeakerdeck().next()}),
        new Command(['p[rev]'], 'Go prev page', function() {HandleSpeakerdeck().prev()}),
        new Command(['f[ullscreen]'], 'Toggle fullscreen', function() {HandleSpeakerdeck().fullscreen()})
      ]
    },
    true
  );
})();
