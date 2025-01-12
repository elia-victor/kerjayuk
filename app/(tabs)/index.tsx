import { Image, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { IconSymbol } from '@/components/ui/IconSymbol';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFF', dark: '#FFF' }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={{ ...styles.blackText }}>Hi, Good Morning!</ThemedText>
        <LinearGradient
          colors={['#F82C17', '#C51060']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
        >
          <ThemedView style={{ ...styles.avatarContainer, marginBottom: 15}}>
            <ThemedView style={{ ...styles.noBackgroundContainer, flexDirection: 'row' }}>
              <Image style={styles.avatar} source={{ uri: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg' }} />
              <ThemedView style={{ backgroundColor: 'transparent', marginLeft: 10 }}>
                <ThemedText style={{ ...styles.text, fontWeight: 500}}>Tabay</ThemedText>
                <ThemedText type='bottomTabTitle' style={{ ...styles.text, fontStyle: 'italic' }}>UI/UX Designer</ThemedText>
              </ThemedView>
            </ThemedView>
            <ThemedView style={styles.noBackgroundContainer}>
              <ThemedText type='bottomTabTitle' style={{ ...styles.text, fontStyle: 'italic', textAlign: 'right' }}>Member since</ThemedText>
              <ThemedText style={{ ...styles.text, fontWeight: 500, textAlign: 'right' }}>01 Juni 2021</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.avatarContainer}>
            <ThemedView style={{ ...styles.noBackgroundContainer, flexDirection: 'row' }}>
              <ThemedView style={styles.noBackgroundContainer}>
                <ThemedText type='bottomTabTitle' style={styles.text}>Location</ThemedText>
                <ThemedText style={{ ...styles.text, fontWeight: 500 }}>Kantor Sahid</ThemedText>
              </ThemedView>
            </ThemedView>
            <ThemedView style={{ ...styles.noBackgroundContainer, justifyContent: 'flex-end' }}>
              <ThemedText type='bottomTabTitle' style={{ ...styles.text, fontStyle: 'italic', textAlign: 'right' }}>ICO</ThemedText>
            </ThemedView>
          </ThemedView>
        </LinearGradient>
        <ThemedText style={{ ...styles.blackText, fontWeight: 800 }}>Today's activity</ThemedText>
        <ThemedView style={{ ...styles.noBackgroundContainer, ...styles.container, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <ThemedView style={{ ...styles.noBackgroundContainer, alignItems: 'center' }}>
            <IconSymbol size={35} name="checkin.fill" color={"#F82C17"} />
            <ThemedText style={{ ...styles.blackText, fontWeight: 800 }}>08:30</ThemedText>
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText }}>Check In</ThemedText>
          </ThemedView>
          <ThemedView style={{ ...styles.noBackgroundContainer, alignItems: 'center' }}>
            <IconSymbol size={35} name="working.fill" color={"#F82C17"} />
            <ThemedText style={{ fontWeight: 800 }}>03:30:00</ThemedText>
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText }}>Working Hours</ThemedText>
          </ThemedView>
          <ThemedView style={{ ...styles.noBackgroundContainer, alignItems: 'center' }}>
            <IconSymbol size={35} name="checkoutTime.fill" color={"#F82C17"} />
            <ThemedText style={{ ...styles.blackText, fontWeight: 800 }}>--:--</ThemedText>
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText }}>Check Out</ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedText style={{ ...styles.blackText, fontWeight: 800 }}>PCS News</ThemedText>
        <ThemedText style={{ ...styles.blackText, fontWeight: 800 }}>Online</ThemedText>
        <ThemedView style={{ ...styles.onlineContainer, flexDirection: 'row' }}>
          <ThemedView style={{  ...styles.noBackgroundContainer, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.avatar} source={{ uri: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg' }} />
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText, fontWeight: 500}}>Tabay</ThemedText>
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText }}>Sahid</ThemedText>
          </ThemedView>
          <ThemedView style={{  ...styles.noBackgroundContainer, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.avatar} source={{ uri: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg' }} />
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText, fontWeight: 500}}>Tabay</ThemedText>
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText }}>Sahid</ThemedText>
          </ThemedView>
          <ThemedView style={{  ...styles.noBackgroundContainer, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.avatar} source={{ uri: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg' }} />
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText, fontWeight: 500}}>Tabay</ThemedText>
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText }}>Sahid</ThemedText>
          </ThemedView>
          <ThemedView style={{  ...styles.noBackgroundContainer, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.avatar} source={{ uri: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg' }} />
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText, fontWeight: 500}}>Tabay</ThemedText>
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText }}>Sahid</ThemedText>
          </ThemedView>
          <ThemedView style={{  ...styles.noBackgroundContainer, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.avatar} source={{ uri: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg' }} />
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText, fontWeight: 500}}>Tabay</ThemedText>
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText }}>Sahid</ThemedText>
          </ThemedView>
          <ThemedView style={{  ...styles.noBackgroundContainer, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.avatar} source={{ uri: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg' }} />
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText, fontWeight: 500}}>Tabay</ThemedText>
            <ThemedText type='bottomTabTitle' style={{ ...styles.blackText }}>Sahid</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#FFF',
    alignItems: 'flex-start',
    gap: 8,
  },
  noBackgroundContainer: {
    backgroundColor: 'transparent'
  },
  onlineContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    boxShadow: '0px 0px 4px 0 rgba(0, 0, 0, 0.2)',
    height: 120,
    padding: 20,
    width: '98%',
    marginLeft: 2
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 1,
  },
  avatarContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', 
  },
  text: {
    color: '#FFF'
  },
  blackText: {
    color: '#000'
  },
  container: {
    width: '100%',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'column',
  }
});
