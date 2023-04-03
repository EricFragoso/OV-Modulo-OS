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
		fontWeight: "bold",
		fontSize: 32,
	},
	listContainer: {
		flex: 1,
		marginHorizontal: 28,
	},
	imagem: {
		width: 44,
		height: 44,
	},
	background: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
