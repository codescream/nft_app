import { View, Text, Image } from 'react-native';
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants';

export const NFTTitle = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}


export const ETHPrice = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}


export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image 
      source={imgUrl}
      resizeMode='contain'
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  )
}


export const People = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      {
        [assets.person01, assets.person02, assets.person03, assets.person04].map(
          (imgUrl, index) => <ImageCmp key={index} imgUrl={imgUrl} index={index} />)
      }
    </View>
  )
}

export const EndDate = () => {
  return (
    <View>
      <Text>EndDate</Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  )
}

