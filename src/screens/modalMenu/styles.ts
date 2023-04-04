import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	card: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "flex-end",
		marginTop: 124,
		marginRight: 36,
	},

	header: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	headerTextCard: {
		color: "#2B3049",
		fontSize: 16,
		fontWeight: "bold",
	},
	bodyCard: {
		backgroundColor: "#459EE8",
		borderWidth: 1.5,
		borderColor: "#2B3049",
		borderRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 16,
		shadowOffset: { height: 4, width: 4 },
		shadowOpacity: 0.5,
	},

	bodyText: {
		fontFamily: "OpenSans_700Bold",
	},

	inputField: {
		marginTop: 8,
		marginBottom: 8,
		width: 240,
		height: 40,
		borderRadius: 5,
		backgroundColor: "#FFF",
		borderWidth: 1.5,
		borderColor: "#459EE8",
		color: "#000",
		paddingLeft: 8,
		fontSize: 16,
	},

	modalContainer: {
		width: "10%",
		height: "10%",
	},
});
