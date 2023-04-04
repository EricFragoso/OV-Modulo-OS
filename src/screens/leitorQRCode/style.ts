import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
		alignItems: "center",
	},
	header: {
		width: "100%",
		height: 120,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#459EE8",
		paddingTop: 52,
		paddingHorizontal: 32,
	},
	headerText: {
		flex: 1,
		textAlign: "center",
		fontFamily: "OpenSans_700Bold",
		fontSize: 28,
	},
	imagem: {
		width: 44,
		height: 44,
	},
	headerQR: {
		flexDirection: "row",
		marginVertical: 24,
		paddingHorizontal: 28,
		alignItems: "center",
	},

	headerQRText: {
		flex: 1,
		fontSize: 24,
		fontFamily: "OpenSans_700Bold",
		textAlign: "center",
	},

	camera: {
		marginTop: 40,
		marginBottom: 40,
		width: "100%",
		height: "45%",
		borderColor: "#459EE8",
		borderWidth: 3,
	},

	background: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},

	content: {
		flex: 1,
		width: "80%",
	},
});
