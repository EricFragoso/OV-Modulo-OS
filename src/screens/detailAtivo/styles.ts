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
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#459EE8",
		paddingTop: 52,
		paddingHorizontal: 32,
	},

	imagem: {
		width: 44,
		height: 44,
	},

	headerText: {
		flex: 1,
		textAlign: "center",
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

	card: {
		backgroundColor: "#2B3049",
		borderRadius: 10,
		marginBottom: 28,
	},
	headerCard: {
		backgroundColor: "#2B3049",
		borderRadius: 10,
		paddingVertical: 8,
		paddingLeft: 12,
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
		fontWeight: "bold",
		marginBottom: 16,
	},
	label: {
		fontWeight: "500",
		marginBottom: 4,
	},

	inputField: {
		width: "100%",
		height: 60,
		borderRadius: 5,
		backgroundColor: "#FFF",
		borderWidth: 1.5,
		borderColor: "#459EE8",
		color: "#000",
		paddingLeft: 8,
		fontSize: 12,
	},
});
