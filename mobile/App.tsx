import { StatusBar } from 'expo-status-bar'
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBG from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import Logo from './src/assets/nlw-spacetime-logo.svg'
import { styled } from 'nativewind'

const StyledeStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBG}
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledeStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <Logo />
        <View className="space-y-2 ">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          className="rounded-full bg-green-500 px-5 py-2 "
          activeOpacity={0.7}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar Lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-clip font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat por Cisão
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
