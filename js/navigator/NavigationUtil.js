export default class NavigationUtil {
    static resetToHome(params) {
        const { navigation } = params
        navigation.navigate('Home')
    }
    /**
     * 页面跳转
     *
     * @static
     * @memberof NavigationUtil
     */
    static goPage = (page, params) => {
        navigation = NavigationUtil.navigation
        navigation.navigate(page, params)
    }
}
