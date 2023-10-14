import { View, Text, StyleSheet } from 'react-native'

function FirstScreen() {
	return (
		<View>
			<Text style={styles.title}>CatsAPP</Text>
			<Text style={styles.mainContainer}>
				{' '}
				<img src='https://i1.sndcdn.com/avatars-000216424319-pvx44j-t500x500.jpg'></img>
				<button style={styles.btn}>Do Nothing</button>
			</Text>
		</View>
	)
}

export default FirstScreen

const styles = StyleSheet.create({
	title: {
		fontSize: '64px',
		textAlign: 'center',
	},

	mainContainer: {
		display: 'flex',
		margin: '10px',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},

	btn: {
		padding: 50,
	},
})
