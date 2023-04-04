import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	card: {
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		backgroundColor: "#B5D8F6",
		borderRadius: 10,
		paddingVertical: 22,
		paddingLeft: 28,
		paddingRight: 12,
		marginTop: 20,
		marginBottom: 20,
	},

	cardHeader: {
		color: "#2B3049",
		fontSize: 20,
		fontFamily: "OpenSans_700Bold",
		marginBottom: 8,
	},

	cardText: {
		color: "#2B3049",
		fontSize: 16,
		fontFamily: "OpenSans_500Medium",
		marginBottom: 8,
	},

	firstColumn: {
		flex: 1,
	},

	secondColumn: {
		alignItems: "flex-start",
		backgroundColor: "#2B3049",
		height: "100%",
		padding: 8,
	},

	iconColumn: {},
});
