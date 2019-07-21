var Match3 = Match3 || {};
Match3.HomeState = {
  create: function () {
    this.add.sprite(0, 0, 'background');
    this.music = this.add.audio('backgroundMusic');
    this.music.loop = true;
    this.music.play();
    var buttonForPlay = this.add.sprite(this.world.centerX, this.world.centerY, 'buttonForPlay');
    buttonForPlay.anchor.setTo(0.5);
    this.select = this.add.audio('select');
    buttonForPlay.inputEnabled = true;
    buttonForPlay.events.onInputDown.add(function () {
      this.select.play();
      this.state.start('GameState');
    }, this);
  }
};
