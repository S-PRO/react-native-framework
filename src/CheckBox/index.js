'use strict'

import React, {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableOpacity
} from 'react-native';

export default class CheckBox extends Component {

  static propTypes = {
   checked: React.PropTypes.bool,
   size: React.PropTypes.number,
   outerColor: React.PropTypes.string,
   markColor: React.PropTypes.string,
   onToggle: React.PropTypes.func.isRequired,
   labelPosition: React.PropTypes.oneOf(['right', 'left']),
   styleCheckboxContainer: View.propTypes.style,
  };

  static defaultProps = {
    checked: false,
    size: 17,
    outerColor: '#387ef5',
    markColor: '#fff',
    borderColor: '#ddd',
    labelPosition: 'right'
  };

  constructor(props) {
    super(props);
    var outerSize = (parseInt(props.size) < 15 || isNaN(parseInt(props.size))) ? 15 : parseInt(props.size);

    var customStyle = StyleSheet.create({
      circleOuterStyle: {
        width: outerSize,
        height: outerSize,
        borderRadius: outerSize/2,
        backgroundColor: props.outerColor
      },
      circleInnerStyle: {
        marginTop: 2,
        marginLeft: outerSize / 4,
        fontSize: outerSize,
        transform: [{rotate: '130deg'}],
        color: props.markColor,
        backgroundColor: 'transparent'
      },
      circleChecked: {
        borderWidth: 0.5,
        borderColor: props.borderColor,
        backgroundColor: props.markColor
      }
    });

    this.state = {
      customStyle: customStyle
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onToggle.bind(this)}>
        <View style={[styles.checkBoxContainer, this.props.styleCheckboxContainer]}>
          {this._renderLabel('left')}
          {this._renderInner()}
          {this._renderLabel('right')}
        </View>
      </TouchableOpacity>
    );
  }

  _onToggle() {
    if(this.props.onToggle) {
      this.props.onToggle(!this.props.checked);
    }
  }

  _renderInner() {
      var cStyles = []
      if(this.props.checked) {
          cStyles = [styles.alignStyle,
                     this.state.customStyle.circleOuterStyle,
                     this.state.customStyle.circleChecked];
      } else {
          cStyles = [styles.alignStyle,
                     this.state.customStyle.circleOuterStyle];
      }
      var templ = (<View style={cStyles}>
                     <Text style={this.state.customStyle.circleInnerStyle}>¬</Text>
                   </View>);
      return templ
  }

  _renderLabel(position) {
    var templ = (<View></View>);
    if ((this.props.children.length > 0) && (position === this.props.labelPosition)) {
      templ = (<Text style={styles.checkBoxLabel}>{this.props.children}</Text>);
    }
    return templ;
  }
}

var styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  alignStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxLabel: {
    marginLeft: 5,
    marginRight: 5
  }
});
