 import { useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";

import { COLORS, NFTData } from '../constants';
import { HomeHeader, NFTCard, FocusedStatusBar } from "../components";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const onSearch = (search) => {

    if (search === "") return setNftData(NFTData);
    
    const filteredNft = nftData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

    if(filteredNft.length === 0) return setNftData(NFTData);

    setNftData(filteredNft);
    
  }

  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
      <FocusedStatusBar 
        background={COLORS.primary}
        barStyle={'dark-content'} />
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            zIndex: 0
          }}
        >
          <FlatList 
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={onSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1
          }}
        >
          <View 
            style={{
              height: 300,
              backgroundColor: COLORS.primary,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home;