import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"

import youtubeLogo from "../../assets/youtube-logo.png";

import styles from "./style"

export default function NavBar() {
    return (
        <View style={styles.navBar}>
            <Image source={youtubeLogo} style={styles.youtubeLogo}/>
            <View style={styles.rightNav}>
            <TouchableOpacity style={styles.itensRightNav}>
                <MaterialIcons name="search" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itensRightNav}>
                <MaterialIcons name="account-circle" size={25}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}