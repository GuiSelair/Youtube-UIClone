import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import styles from "./style.js"

export default function VideoThumb({video}){
    return (
        <View style={styles.container}>
            <Image source={{uri: video.snippet.thumbnails.medium.url}} style={styles.imageThumbnail}/>
            <View style={styles.describeVideo}>
                <Image source={{uri: "https://avatars3.githubusercontent.com/u/39627743?s=460&v=4"}} style={styles.avatarChannel}/>
                <View style={styles.videoDetails}>
                    <Text numberOfLines={2} style={styles.videoTitle}>{video.snippet.title}</Text>
                    <Text style={styles.videoStats}>{video.snippet.channelTitle}  {nFormatter(video.statistics.viewCount, 1)} views</Text>
                </View>
                <TouchableOpacity>
                    <MaterialIcons name="more-vert" size={20} color="#9e9e9e"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function nFormatter(num, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }