import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
	},

	content: {
		flex: 1,
		marginTop: 80,
		alignItems: "center",
		width: "80%",
		gap: 20,
	},

	firstContent: { alignItems: "center", justifyContent: "center" },

	imagem: {
		width: 140,
		height: 140,
		marginBottom: 40,
	},

	header: {
		width: "100%",
		height: 120,
		backgroundColor: "#459EE8",
		alignItems: "center",
		justifyContent: "flex-end",
		paddingBottom: 20,
	},

	headerText: {
		fontFamily: "OpenSans_700Bold",
		fontSize: 32,
	},

	inputText: {
		fontSize: 20,
		fontFamily: "OpenSans_600SemiBold",
	},

	inputField: {
		width: 240,
		height: 40,
		borderRadius: 5,
		backgroundColor: "#FFF",
		borderWidth: 1.5,
		borderColor: "#459EE8",
		color: "#000",
		paddingLeft: 8,
		fontSize: 16,
		fontFamily: "OpenSans_300Light",
	},
});
