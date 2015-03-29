// vim: tabstop=2 shiftwidth=2 softtabstop=2 expandtab

'use strict';

function render () {
  var React = require('react');

  //var HelloMessage = React.createClass({
  //  render: function() {
  //    return <div>Hello {this.props.name}</div>;
  //  }
  //});

  React.render(
    //<helloMessge name="Al" />,
    <p>Lorem Ipsum</p>,
    document.getElementById('react-example')
  );
}

module.exports = {render: render};
