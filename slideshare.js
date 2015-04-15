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
    var leftPoint = obj.querySelector('.leftpoint');
    var rightPoint = obj.querySelector('.rightpoint');
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
                    function() {HandleSlideShare().next()}),
        new Command(['p[rev]'], 'Go prev page',
                    function() {HandleSlideShare().prev()}),
        new Command(['f[ullscreen]'], 'Toggle fullscreen',
                    function() {HandleSlideShare().fullscreen()})
      ]
    },
    true
  );
})();
