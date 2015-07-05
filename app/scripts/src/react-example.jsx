// vim: tabstop=2 shiftwidth=2 softtabstop=2 expandtab
/* jshint quotmark: false */

'use strict';

function render () {
  var React = require('react');
  var mobservable = require('mobservable');

  function InputData(input) {
    mobservable.props(this, {
      input: input
    });
  }

  var InputView = React.createClass({
    mixins: [mobservable.ObserverMixin],

    render: function() {
      return <input type="text" onChange={this.update} value={this.props.input.input} />;
    },

    update: function() {
      // How do we make the input field changeable?
      console.log(this.props.input.input);
    }
  });

  React.render(
    <InputView input={new InputData('testal')} />,
    document.getElementById('nato-input-container')
  );
}

module.exports = {render: render};
