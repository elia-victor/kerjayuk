import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedRef,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { ThemedText } from './ThemedText';
import { IconSymbol } from './ui/IconSymbol';

const HEADER_HEIGHT = 250;

export default function ParallaxScrollView({
  children,
}: any) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const bottom = useBottomTabOverflow();

  const NotificationButton = ({ onPress }: any) => (
    <TouchableOpacity onPress={onPress}>
      <IconSymbol style={{ backgroundColor: '#FFF' }} size={30} name="notification.outline" />
    </TouchableOpacity>
  )

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}>
        <ThemedView style={{ width: '95%' }}>
          <View style={{ backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between' }}>
            <ThemedText style={{ backgroundColor: '#FFF', fontFamily: 'BalooBhaijaan' }} type='logo'>KerjaYuk!</ThemedText>
            <NotificationButton />
          </View>
        </ThemedView>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    padding: 27,
    backgroundColor: '#FFF',
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  content: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    gap: 16,
    overflow: 'hidden',
  },
});
