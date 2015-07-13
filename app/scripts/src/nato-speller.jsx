// vim: tabstop=2 shiftwidth=2 softtabstop=2 expandtab
/* jshint quotmark: false */

'use strict';

function render () {
  var React = require('react');
  var mobservable = require('mobservable');

  var alphabet = {
    a: 'alfa',
    b: 'bravo',
    c: 'charlie',
    d: 'delta',
    e: 'echo',
    f: 'foxtrot',
    g: 'golf',
    h: 'hotel',
    i: 'india',
    j: 'juliett',
    k: 'kilo',
    l: 'lima',
    m: 'mike',
    n: 'november',
    o: 'oscar',
    p: 'papa',
    q: 'quebec',
    r: 'romeo',
    s: 'sierra',
    t: 'tango',
    u: 'uniform',
    v: 'victor',
    w: 'whiskey',
    x: 'xray',
    y: 'yankee',
    z: 'zulu',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  };

  function InputData(input) {
    mobservable.props(this, {
      input: input
    });
  }

  var InputView = React.createClass({
    mixins: [mobservable.ObserverMixin],

    update: function() {
      this.props.input.input = this.getDOMNode().value;
      console.log(this.props.input.input);
    },

    render: function() {
      return <input type="text" onChange={this.update} value={this.props.input.input} />;
    }
  });

  var SpellerView = React.createClass({
    mixins: [mobservable.ObserverMixin],

    render: function() {
      return (
        <ul>
          {this.props.input.input.split('').map(function(ch) {
            if (ch === ' ') {
              return <li>&nbsp;</li>;
            }
            return <li>{alphabet[ch]}</li>;
          })}
        </ul>
      );
    }
  });

  var data = new InputData('');

  React.render(
    <InputView input={data} />,
    document.getElementById('nato-input-container')
  );
  React.render(
    <SpellerView input={data} />,
    document.getElementById('nato-speller-container')
  );
}

module.exports = {render: render};
