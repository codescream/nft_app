import { View, Text, Image } from 'react-native';


import { ETHPrice } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 20,
        padding: SIZES.font
      }}
    >
      <Image 
        source={bid.image}
        resizeMode='contain'
        style={{
          width: 48,
          height: 48
        }}
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3
          }}
        >
          {bid.date}
        </Text>
      </View>
      <ETHPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid;