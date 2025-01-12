import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, TouchableOpacity } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const CustomTabBarButton = ({ children, onPress }: any) => (
    <TouchableOpacity
      style={{
        top: -37,
      }}
      onPress={onPress}
    >
      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: '#F82C17',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px -2px 8px 0px lightgray'  
        }}>
          {children}
        </View>
        <ThemedText style={{ marginTop: 10 }} type='bottomTabTitle'>Check Out</ThemedText>
      </View>
    </TouchableOpacity>
  )

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            height: 70,
            backgroundColor: '#FFF',
            boxShadow: '0px -2px 8px 0px lightgray'
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ height: 50, width: 100, marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
              <IconSymbol size={40} name="house.fill" color={color} />
              <ThemedText style={{ color: focused ? '#F82C17' : '#A0A0A0' }} type='bottomTabTitle'>Home</ThemedText>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: 'Attendance',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ height: 50, width: 100, marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
              <IconSymbol size={40} name="attendance.fill" color={color} />
              <ThemedText style={{ color: focused ? '#F82C17' : '#A0A0A0' }} type='bottomTabTitle'>Attendance</ThemedText>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="checkout"
        options={{
          title: 'Check Out',
          tabBarIcon: () => <IconSymbol size={30} name="checkout.fill" color={'#FFF'} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          title: 'Form',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ height: 50, width: 100, marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
              <IconSymbol size={40} name="form.fill" color={color} />
              <ThemedText style={{ color: focused ? '#F82C17' : '#A0A0A0' }} type='bottomTabTitle'>Form</ThemedText>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ height: 50, width: 100, marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
              <IconSymbol size={40} name="settings.fill" color={color} />
              <ThemedText style={{ color: focused ? '#F82C17' : '#A0A0A0' }} type='bottomTabTitle'>Setting</ThemedText>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
