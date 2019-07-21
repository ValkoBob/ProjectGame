var Match3 = Match3 || {};

Match3.BootState = {
  init: function () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },

  preload: function () {
    this.load.image('logo', 'assets/images/donuts_logo.png');
    this.load.image('donut', 'assets/images/donut.png');
  },

  create: function () {
    this.game.stage.backgroundColor = 'black';
    this.state.start('PreloadState');
  }
};