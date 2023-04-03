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

	headerOS: {
		flexDirection: "row",
		marginVertical: 24,
		paddingHorizontal: 28,
		alignItems: "center",
	},

	headerOSText: {
		flex: 1,
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},

	listContainer: {
		flex: 1,
		marginHorizontal: 28,
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
	companyInfo: {
		backgroundColor: "#459EE8",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
	companyName: {
		color: "#2B3049",
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 16,
	},
	companyCnpj: {
		color: "#2B3049",
		fontSize: 14,
		marginBottom: 20,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 12,
	},
	column: {
		flex: 1,
		marginRight: 8,
	},
	label: {
		color: "#2B3049",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 4,
	},
	info: {
		color: "#2B3049",
		fontSize: 14,
	},

	containerButton: {
		marginBottom: 40,
	},
	imagem: {
		width: 44,
		height: 44,
	},
});
