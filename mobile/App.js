import React from 'react';
import { View, SafeAreaView, StatusBar, FlatList } from 'react-native';

import dataYoutube from "./src/assets/data.json";

import VideoThumb from "./src/components/VideoThumb/index";
import TabBar from "./src/components/TabBar/index";
import NavBar from "./src/components/NavBar/index";


import styles from "./style"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <NavBar/>
      <View style={styles.body}>
        <FlatList 
          data={dataYoutube.items}
          renderItem={video => <VideoThumb video={video.item} />}
          keyExtractor = {(item) => {
            return item.id
          }}
          ItemSeparatorComponent={() => (<View style={styles.lineSeparator}/>)}
        />
      </View>
      <TabBar/>
    </SafeAreaView>
    
  );
}

