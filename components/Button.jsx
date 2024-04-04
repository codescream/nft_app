import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants';


export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity 
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image 
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  )
}

export const RectButton = ({ minWidth, fontSize, text, handlePress, ...props }) => {
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          color: COLORS.white,
          fontSize: fontSize,
          textAlign: 'center'
        }}
      >{text}</Text>
    </TouchableOpacity>
  )
}