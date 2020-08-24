import React from 'react'
import {
    View,
    Text,
    StatusBar,
    ViewPropTypes,
    StyleSheet,
    Platform,
} from 'react-native'
import PropTypes from 'prop-types'

const NavigationBar = (props) => {
    const {
        title,
        TitleView,
        LeftButton,
        RightButton,
        style,
        statusBar,
        hideStatusBar,
    } = props

    return (
        <View style={style}>
            <View style={styles.statusBarStyle}>
                <StatusBar
                    backgroundColor="#dc7275"
                    hidden={hideStatusBar}
                    barStyle={statusBar}
                />
            </View>

            <View style={styles.navContainer}>
                <View style={styles.leftContainer}>
                    {LeftButton ? <LeftButton /> : <Text></Text>}
                </View>

                <View style={styles.titleContainer}>
                    {TitleView ? (
                        <TitleView />
                    ) : (
                        <Text
                            ellipsizeMode="head"
                            numberOfLines={1}
                            style={styles.title}>
                            {title}
                        </Text>
                    )}
                </View>

                <View style={styles.rightContainer}>
                    {RightButton ? <RightButton /> : <Text></Text>}
                </View>
            </View>
        </View>
    )
}

const statusBarShape = {
    barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content ']),
}

NavigationBar.PropTypes = {
    // 内容区
    title: PropTypes.string,
    TitleView: PropTypes.element,
    LeftButton: PropTypes.element,
    RightButton: PropTypes.element,

    // 样式
    style: ViewPropTypes.style,

    // 状态栏
    statusBar: PropTypes.shape(statusBarShape),
    hideStatusBar: PropTypes.bool,
}

NavigationBar.defaultProps = {
    title: 'title',
    hideStatusBar: false,
    RightButton: null,
    statusBar: 'dark-content',
}

const styles = StyleSheet.create({
    statusBarStyle: {
        // height: Platform.OS === 'ios' ? 20 : 0,
    },

    navContainer: {
        height: Platform.OS === 'ios' ? 44 : 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#dc7275',
        position: 'relative',
    },

    titleContainer: {
        marginHorizontal: 'auto',
    },

    title: {
        fontSize: 16,
        color: '#fff',
    },
})

export default NavigationBar
