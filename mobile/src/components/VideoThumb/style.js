import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    imageThumbnail: {
        height: 200,
    },
    describeVideo: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 20,
    },
    avatarChannel: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    videoDetails: {
        paddingHorizontal: 15,
        flex: 1
    },
    videoTitle: {
        fontSize: 16,
        color: "#3C3C3C"
    },
    videoStats: {
        fontSize: 13,
        paddingTop: 3,
        color: "#9e9e9e"
    }
})

export default styles