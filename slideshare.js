(function() {
  var SlidePlayer = function(leftPoint, rightPoint, fullScreenPoint) {
    this.leftPoint = leftPoint;
    this.rightPoint = rightPoint;
    this.fullScreenPoint = fullScreenPoint;
  };
  SlidePlayer.prototype = {
    next: function() {
      this.rightPoint.click();
    },
    prev: function() {
      this.leftPoint.click();
    },
    fullscreen: function() {
      this.fullScreenPoint.click();
    }
  }

  var HandleSlideShare = function() {
    var doc = content.document;
    if (doc.location.host !== 'www.slideshare.net') {
      return liberator.echoerr('Here is not slideshare...: here is ' + doc.location.host);
    }
    var obj = doc.wrappedJSObject;
    var leftPoint = obj.querySelector('#btnPrevious');
    var rightPoint = obj.querySelector('#btnNext');
    var fullScreenPoint = obj.querySelector('#btnFullScreen');
    var player = new SlidePlayer(leftPoint, rightPoint, fullScreenPoint);
    return player;
  };

  liberator.modules.commands.addUserCommand(
    ['slideshare'],
    'slideshare controller',
    function() {},
    {
      subCommands: [
        new Command(['n[ext]'], 'Go next page',
                    function() {new HandleSlideShare().next()}),
        new Command(['p[rev]'], 'Go prev page',
                    function() {new HandleSlideShare().prev()}),
        new Command(['f[ullscreen]'], 'Toggle fullscreen',
                    function() {new HandleSlideShare().fullscreen()})
      ]
    },
    true
  );
})();
