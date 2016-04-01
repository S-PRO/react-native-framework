'use strict';

import React, { Component, StyleSheet, Image, Animated, Easing, Dimensions} from 'react-native';

import ViewPager from 'react-native-viewpager';

const {width} = Dimensions.get('window');

var styles = StyleSheet.create({
        image: {
            height: 240,
            width,
            resizeMode: 'cover'
        }
    }
);

export default class ImageSlider extends Component {
    constructor(props){
        super(props);
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        this.state = {
            dataSource: dataSource.cloneWithPages(props.images)
        }
    }
    _renderPage(data,pageID) {
        return (
            <Image
                source={{uri: data}} style={styles.image}/>
        );
    }

    render(){
        return(
            <ViewPager
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                animation = {(animatedValue, toValue, gestureState) => {
    // Use the horizontal velocity of the swipe gesture
    // to affect the length of the transition so the faster you swipe
    // the faster the pages will transition
    var velocity = Math.abs(gestureState.vx);
    var baseDuration = 200;
    var duration = (velocity > 1) ? 1/velocity * baseDuration : baseDuration;

    return Animated.timing(animatedValue,
    {
      toValue: toValue,
      duration: duration,
      easing: Easing.out(Easing.exp)
    });
      }}
            />
        )
    }
}
