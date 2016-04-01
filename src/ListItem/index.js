'use strict';

import React, { Component, StyleSheet, View, Text } from 'react-native';

export default class ListItem extends Component {

    constructor(props) {
        super(props);

        var defaultStyles = {
            Row: {
                flex: 1,
                backgroundColor: props.backgroundColor,
                borderColor: props.borderColor
            },
            Text: {
                color: props.textColor,
                fontSize: props.textSize
            },
            Note: {
                color: props.noteColor,
                fontSize: 10
            }
        };
        this.state = {
            defaultStyles: defaultStyles
        }
    }

    static defaultProps = {
        textSize: 12,
        textColor: '#444',
        noteColor: '#aaa',
        backgroundColor: '#fff',
        borderColor: '#ddd'
    };

    _renderAvatar(item) {
        return (<View style={[styles.typeAvatar, item.props.usersStyles]}>{item}</View>)
    }

    _renderThumbnail(item) {
        return (<View style={[styles.typeThumbnail, item.props.usersStyles]}>{item}</View>)
    }

    _renderIcon(item) {
        return (<View style={[styles.typeIcon, item.props.usersStyles]}>{item}</View>)
    }

    _renderButton(item) {
        return (<View style={[styles.typeButton, item.props.usersStyles]}>{item}</View>)
    }

    _renderNote(item) {
        return (<View style={styles.typeNote}>
                    <Text style={[this.state.defaultStyles.Note, item.props.usersStyles]}>{item}</Text>
                </View>)
    }

    _renderText(item) {
        return (<View style={styles.typeText}>
                    <Text style={[this.state.defaultStyles.Text, item.props.usersStyles]}>{item}</Text>
                </View>)
    }

    _renderSideItem(item) {
        var hash = Math.random().toString(36).substring(7);
        if (item.props.itemType == 'icon')
            return (<View key={hash} style={styles.Asset}>{this._renderIcon(item)}</View>);
        if (item.props.itemType == 'avatar')
            return (<View key={hash} style={styles.Asset}>{this._renderAvatar(item)}</View>);
        if (item.props.itemType == 'thumbnail')
            return (<View key={hash} style={styles.Asset}>{this._renderThumbnail(item)}</View>);
        if (item.props.itemType == 'button')
            return (<View key={hash} style={styles.Asset}>{this._renderButton(item)}</View>);
        if (item.props.itemType == 'note')
            return (<View key={hash} style={styles.Asset}>{this._renderNote(item)}</View>);
        if (item.props.itemType == 'text')
            return (<View key={hash} style={styles.mainColumn}>{this._renderText(item)}</View>);
    }

    _renderRow(items) {
        var res = [];
        if (typeof items.length == 'undefined') {
            res.push(items);
        } else {
            for (var i=0; i < items.length; i++) {
                res.push(this._renderSideItem(items[i]));
            }
        }
        return (
            <View style={styles.Row}>
                {res}
            </View>);
    }

    render() {
        return(
            <View style={this.state.defaultStyles.Row}>
                {this._renderRow(this.props.children)}
            </View>
        )
    }
}

var styles = StyleSheet.create({
    Row: {
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#ddd'
    },
    Asset: {
        margin: 10,
        alignSelf: 'center',
        alignItems: 'center'
    },
    mainColumn: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center'
    },
    typeText: {
        margin: 10
    },
    typeIcon: {
    },
    typeAvatar: {
        width: 50,
        height: 50,
        overflow: 'hidden',
        borderRadius: 25
    },
    typeThumbnail: {
        width: 100,
        height: 100,
        overflow: 'hidden'
    },
    typeButton: {
        width: 70
    }
});
