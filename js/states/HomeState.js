var Match3 = Match3 || {};
Match3.HomeState = {
  create: function () {
    this.add.sprite(0, 0, 'background');
    this.music = this.add.audio('backgroundMusic');
    this.music.loop = true;
    this.music.play();
    var buttonForPlay  = this.add.button(this.world.centerX, this.world.centerY, 'buttonForPlay', this.startGame,
        this, 0, 1, 2);
    buttonForPlay.name = 'play';
    buttonForPlay.anchor.setTo(0.5);
    buttonForPlay.smoothed = false;
    this.select = this.add.audio('select');

    var textTutorial = this.add.text(this.world.centerX, this.world.centerY + 150, 'Tutorial',
        {font: "64px Arial", fill: "#ffffff", align: "center"});
    textTutorial.anchor.setTo(0.5);
    textTutorial.inputEnabled = true;
    textTutorial.events.onInputDown.add(this.startTutorial, this);

  },

  startGame: function () {
    this.select.play();
    this.music.destroy(true);
    this.state.start('GameState');
  },

  startTutorial: function () {
    this.music.destroy(true);
    this.state.start('ExampleState');
  }
};
