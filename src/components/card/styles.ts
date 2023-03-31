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
		marginTop: 48,
	},

	cardHeader: {
		color: "#2B3049",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 8,
	},

	cardText: {
		color: "#2B3049",
		fontSize: 16,
		fontWeight: "500",
		marginBottom: 8,
	},

	firstColumn: {
		flex: 1,
	},

	secondColumn: {
		alignItems: "flex-start",
	},

	iconColumn: {},
});
