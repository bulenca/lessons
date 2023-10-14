import { View, Text, StyleSheet } from 'react-native'

function SecondScreen() {
	return (
		<View>
			<form action='emailto:xxx@xxx.xxx' style={styles.form}>
				<label htmlFor='email'>Podaj email: </label>
				<input type='email' name='email' id='email' />
				<label htmlFor='info'>Podaj treść zapytania:</label>
				<textarea name='info' id='info' cols='30' rows='10'></textarea>
				<button>Wyślij</button>
			</form>
		</View>
	)
}

export default SecondScreen

const styles = StyleSheet.create({
	form: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		padding: 30,
	},
})
