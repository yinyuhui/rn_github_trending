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
        const { navigation } = NavigationUtil
        if (!navigation) {
            console.error('navigation 为空 ')
            return
        }
        navigation.navigate(page, params)
    }
}
