export default class NavigationUtil {
    static resetToHome(params) {
        const { navigation } = params
        navigation.navigate('Home')
    }
}
