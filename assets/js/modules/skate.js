function Skate(skateColor, skateType) {
  this.color = skateColor;
  this.type = skateType;
  this.doTrick = function() {
    console.log('Awesome trick on a '+ this.color + ' and ' + this.type + 'skate!');
  }
};

module.exports = Skate;
