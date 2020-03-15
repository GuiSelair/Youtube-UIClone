import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    tabBar: {
        height: 60,
        backgroundColor: "white",
        borderTopWidth: 0.5,
        borderColor: "#e5e5e5",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
      },
      tabItem: {
        alignItems: "center",
        justifyContent: "center",
      },
      tabTitle: {
        fontSize: 11,
        color: "#3C3C3C",
      },
})