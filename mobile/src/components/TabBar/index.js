import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"

import styles from "./style"

export default function TabBar(){
    return (
        <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem}>
            <MaterialIcons name="home" size={25} color="red"/>
            <Text style={styles.tabTitle}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="md-compass" size={25} color="#565656"/>
            <Text style={styles.tabTitle}>Explorar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
            <MaterialIcons name="subscriptions" size={25} color="#565656"/>
            <Text style={styles.tabTitle}>Inscrições</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
            <MaterialIcons name="local-post-office" size={25} color="#565656" />
            <Text style={styles.tabTitle}>Caixa entrada</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
            <MaterialCommunityIcons name="animation-play" size={25} color="#565656"/>
            <Text style={styles.tabTitle}>Biblioteca</Text>
            </TouchableOpacity>
        </View>
    );
}