import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import clockPL from './clockPL'
import clockNY from './clockNY'
import clockTOKYO from './clockTOKYO'
import clockSY from './clockSY'
import clockOTTAWA from './clockOTTAWA'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const BottomTab = createBottomTabNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				screenOptions={{
					tabBarActiveTintColor: '#e91e63',
				}}>
				<BottomTab.Screen
					name='Poland'
					component={clockPL}
					options={{
						tabBarIcon: ({ color, size }) => <FontAwesome5 name='flag' color={color} size={size} />,
					}}
				/>
				<BottomTab.Screen
					name='New York'
					component={clockNY}
					options={{
						tabBarIcon: ({ color, size }) => <FontAwesome5 name='flag-usa' color={color} size={size} />,
					}}
				/>
				<BottomTab.Screen
					name='Tokyo'
					component={clockTOKYO}
					options={{
						tabBarIcon: ({ color, size }) => <FontAwesome5 name='flag' color={color} size={size} />,
					}}
				/>
				<BottomTab.Screen
					name='Sydney'
					component={clockSY}
					options={{
						tabBarIcon: ({ color, size }) => <FontAwesome5 name='flag' color={color} size={size} />,
					}}
				/>
				<BottomTab.Screen
					name='Ottawa'
					component={clockOTTAWA}
					options={{
						tabBarIcon: ({ color, size }) => <FontAwesome5 name='flag' color={color} size={size} />,
					}}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
