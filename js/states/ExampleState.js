var Match3 = Match3 || {};

Match3.ExampleState = {
  create: function () {
    this.background = this.add.sprite(0, 0, 'background');

    this.title = this.add.text(this.world.centerX, 67, 'How to Play:',
        {font: "64px Arial", fill: "#ffffff", align: "center"});
    this.title.anchor.setTo(0.5, 0);
    this.mainText = this.add.text(0, 150, 'Swap 2 items to match 3 or more of the same items in\n a row.',
        {font: "32px Arial", fill: "black", align: "center"});
    this.back = this.add.text(0, 0, '< Back',
        {font: "64px Arial", fill: "black", align: "center"});
    this.screen = this.add.sprite(this.world.centerX / 2 + 30, this.world.centerY - 30, 'screen3');
    this.screen.scale.set(0.7);

    this.back.inputEnabled = true;
    this.back.events.onInputDown.add(this.backToMenu, this);
  },

  backToMenu: function () {
    this.game.state.start('HomeState');
  }
};