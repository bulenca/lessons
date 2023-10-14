import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: '#445566' },
					headerTintColor: 'white',
				}}>
				<BottomTab.Screen
					name='CatsApp Main'
					component={FirstScreen}
					options={{
						tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
					}}
				/>
				<BottomTab.Screen name='CatsApp Contact' component={SecondScreen} />
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
