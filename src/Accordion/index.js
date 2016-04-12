'use strict';

import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    LayoutAnimation,
    RefreshControl
} from 'react-native';

function generateHash() {
    return Math.random().toString(36).substring(7);
}

export default class Accordion extends Component {
    static propTypes = {
        dataSource: PropTypes.object.isRequired,
        orderBy: PropTypes.array,
        onRefresh: PropTypes.func.isRequired
    };

    static defaultProps = {
        orderBy: [],
        headerStyles: {},
        headerTextStyles: {},
        isRefreshing: false,
        indicatorColor: '#777'
    };

    _prepareData() {
        let results = [];
        const { dataSource, orderBy } = this.props;

        if (orderBy.length > 0) {
            for (let key in orderBy) {
                if (Object.keys(dataSource[orderBy[key]]).length > 0)
                    results[orderBy[key]] = dataSource[orderBy[key]]
            }
        } else {
            for (let key in dataSource) {
                if (Object.keys(dataSource[key]).length > 0)
                    results[key] = dataSource[key]
            }
        }
        return results;
    }

    _renderList(items) {
        let result = [];
        let header = '';
        let childItems = [];
        for (let key in items) {
            for (let i in items[key]){
                if(typeof items[key][i] === 'string') {
                    header = items[key][i];
                } else {
                    childItems = items[key][i];
                }
            }
            result.push(
                <AccordionSection
                    key={generateHash()}
                    title={header}
                    items={childItems}
                    headerStyles={this.props.headerStyles}
                    headerTextStyles={this.props.headerTextStyles} />);
        }
        return result;
    }

    render() {
        const {isRefreshing, onRefresh, indicatorColor} = this.props;
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={onRefresh}
                        tintColor={indicatorColor}
                        colors={[indicatorColor]}
                    />}
            >
                <View>
                    {this._renderList(this._prepareData())}
                </View>
            </ScrollView>
        )
    }
}

class AccordionSection extends Component {
    constructor(props) {
        super(props);
        this.state = {hidden: false}
    }

    static propTypes = {
        title: PropTypes.string,
        items: PropTypes.object
    };

    _collapseItem() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.setState({hidden: !this.state.hidden});
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    key={generateHash()}
                    style={[styles.Header, this.props.headerStyles]}
                    onPress={this._collapseItem.bind(this)}
                ><Text style={[styles.HeaderText, this.props.headerTextStyles]}>{this.props.title}</Text>
                </TouchableOpacity>
                <View
                    style={this.state.hidden ? styles.HiddenRow : styles.Row}
                    key={generateHash()}
                >{this.props.items}</View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column'
    },
    Header: {
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#eee',
        flexDirection: 'column',
        paddingLeft: 10
    },
    HeaderText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#555'
    },
    Row: {
        flexDirection: 'column',
        paddingVertical: 20
    },
    HiddenRow: {
        height: 0,
        overflow: 'hidden'
    }
});
