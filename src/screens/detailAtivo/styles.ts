import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
		alignItems: "center",
	},
	listContainer: {
		flex: 1,
		paddingHorizontal: 28,
		width: "100%",
	},
	header: {
		width: "100%",
		height: 120,
		backgroundColor: "#459EE8",
		alignItems: "center",
		paddingTop: 52,
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 32,
	},
	headerAtivo: {
		flexDirection: "row",
		marginVertical: 24,
		paddingHorizontal: 28,
		alignItems: "center",
	},

	headerAtivoText: {
		flex: 1,
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
});
