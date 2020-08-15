import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

const axiosInstance = axios.create({
    timeout: 30000,
})

axiosInstance.interceptors.response.use((res) => res.data)

function saveData(url, data, callback) {
    if (!url || !data) return
    data = { data, timestamp: Date.now() }
    AsyncStorage.setItem(url, JSON.stringify(data), callback)
}

function checkTimestampValid(timestamp, validHour = 3) {
    const currentTimestamp = Date.now()
    diffHour = (currentTimestamp - timestamp) / 1000 / 60 / 60
    return diffHour < validHour
}

function getLocalData(url) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(url, (err, value) => {
            err ? reject(err) : resolve(JSON.parse(value))
        })
    })
}

function getNetworkDate(url) {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(url)
            .then((res) => {
                saveData(url, res)
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export default function get(url) {
    return new Promise((resolve) => {
        getLocalData(url)
            .then((res) => {
                // 获取本地数据
                console.log('get getLocalData res', res)
                if (res && checkTimestampValid(res.timestamp)) {
                    resolve(res.data)
                } else {
                    console.log('getNetworkDate1')
                    resolve(getNetworkDate(url))
                }
            })
            .catch((err) => {
                console.error('get err', err)
                console.log('getNetworkDate2')
                resolve(getNetworkDate(url))
            })
    })
}

export function clearAll() {
    AsyncStorage.clear()
}
