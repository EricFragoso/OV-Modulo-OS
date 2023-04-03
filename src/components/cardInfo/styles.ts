import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	card: {
		backgroundColor: "#2B3049",
		borderRadius: 10,
		marginBottom: 28,
	},
	headerCard: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#2B3049",
		borderRadius: 10,
		paddingVertical: 8,
		paddingHorizontal: 12,
	},
	headerTextCard: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
	bodyCard: {
		backgroundColor: "#459EE8",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
	bodyText: {
		color: "#2B3049",
		fontSize: 16,
		marginBottom: 16,
	},
	bodyTextEmpty: {
		color: "#2B3049",
		fontWeight: "300",
	},

	bodyTextFilled: {
		fontWeight: "bold",
	},
});
