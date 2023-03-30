import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	card: {
		alignItems: "flex-start",
		justifyContent: "space-between",
		flexDirection: "row",
		width: 336,
		height: 76,
		backgroundColor: "#B5D8F6",
		borderRadius: 10,
		paddingRight: 60,
		marginBottom: 28,
		marginTop: 4,
	},

	imageBox: {
		backgroundColor: "#6AB1ED",
		width: 84,
		height: 84,
		borderRadius: 10,
		marginTop: -4,
	},

	cardHeader: {
		color: "#2B3049",
		marginTop: 12,
		marginBottom: 12,
		fontSize: 20,
		fontWeight: "bold",
	},

	cardText: {
		color: "#2B3049",
		fontSize: 16,
		fontWeight: "500",
	},

	firstColumn: {},

	secondColumn: {
		marginTop: 36,
	},
});