!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],n):n(t.preactSlots={},t.preact)}(this,function(t,n){var o=function(){};o.prototype.getChildContext=function(){return{slots:{named:{},onChange:{}}}},o.prototype.render=function(t){return t.children[0]};var e=function(){};function r(t,o){var e,r=this;n.Component.call(this,t,o);var p=function(){var t=r.props,n=r.state,o=r.context.slots.named[t.name];n.content&&o==n.content[t.name]||r.setState({content:Object.assign({},n.content,(e={},e[t.name]=o,e))})};this.componentDidMount=function(){r.context.slots.onChange[r.props.name]=p},this.componentWillUnmount=function(){r.context.slots.onChange[r.props.name]=p},p()}e.prototype.apply=function(t,n,o){var e=this.context.slots;if(t&&(e.named[t]=n,o)){var r=e.onChange[t];r&&r()}},e.prototype.componentDidMount=function(){this.apply(this.props.slot,this.props.children,!0)},e.prototype.componentWillReceiveProps=function(t){var n=t.slot,o=t.children;n!==this.props.slot?(this.apply(this.props.slot,null,!1),this.apply(n,o,!0)):o!==this.props.children&&this.apply(n,o,!0)},e.prototype.componentWillUnmount=function(){this.apply(this.props.slot,null,!0)},e.prototype.render=function(){return null},(r.prototype=new n.Component).constructor=r,r.prototype.render=function(t,n){var o=n.content;void 0===o&&(o={});var e=t.children[0];return"function"==typeof e?e(o[t.name]):o[t.name]&&o[t.name][0]||e},t.SlotProvider=o,t.SlotContent=e,t.Slot=r,t.withSlot=function(t,o){return function(e){return function(p){return n.h(r,{name:t},function(r){var i={};for(var c in i[o||t]=r,p)i[c]=p[c];return n.h(e,i)})}}}});
//# sourceMappingURL=preact-slots.umd.js.map