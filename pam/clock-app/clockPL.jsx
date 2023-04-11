import { View, Text, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'

function clockEU({ offset }) {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => clearInterval(intervalId)
	}, [])

	const getTimeWithOffset = () => {
		const offset = 2
		const utc = time.getTime() + time.getTimezoneOffset() * 60000
		const cityTime = new Date(utc + offset * 3600000)
		return cityTime
	}

	return (
		<View>
			<Text style={styles.title}>Poland</Text>

			<Text style={styles.timeText}>{getTimeWithOffset().toLocaleTimeString()}</Text>

			<View style={styles.mainContainer}>
				<View>
					<Text style={styles.containerTitle}>Day</Text>
					<Text>{getTimeWithOffset().getDate()}</Text>
				</View>
				<View>
					<Text style={styles.containerTitle}>Month</Text>
					<Text>{getTimeWithOffset().getMonth()}</Text>
				</View>

				<View>
					<Text style={styles.containerTitle}>Year</Text>
					<Text>{getTimeWithOffset().getFullYear()}</Text>
				</View>
			</View>
		</View>
	)
}

export default clockEU

const styles = StyleSheet.create({
	title: {
		marginTop: '15px',
		fontSize: '72px',
		textAlign: 'center',
		fontFamily: 'Times New Roman',
		color: '#000',
		textTransform: 'uppercase',
		color: '#ccc',
	},

	mainContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: '30px',
		textAlign: 'center',
	},

	containerTitle: {
		textTransform: 'uppercase',
		fontSize: '32px',
		fontFamily: 'Brush Script MT',
		color: '#444',
		textAlign: 'center',
	},

	timeText: {
		fontSize: '46px',
		textAlign: 'center',
	},

	btn: {
		padding: 50,
	},
})
