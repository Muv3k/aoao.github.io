import bridge from '@vkontakte/vk-bridge'

export default function () {
    return new Promise(((resolve) => {
        bridge.send("VKWebAppGetUserInfo", {})
            .then((res) => {
                resolve(res.last_name)
            })
    }))
}