import * as Font from 'expo-font';

export async function bootstrap() {
  await Font.loadAsync({
    'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'MullerNarrow-ExtraBold': require('../assets/fonts/MullerNarrow-ExtraBold.ttf'),
    'MullerNarrow-ExtraBoldItalic': require('../assets/fonts/MullerNarrow-ExtraBoldItalic.ttf'),
    'MullerNarrow-Light': require('../assets/fonts/MullerNarrow-Light.ttf'),
    'MullerNarrow-LightItalic': require('../assets/fonts/MullerNarrow-LightItalic.ttf'),
  });
}
