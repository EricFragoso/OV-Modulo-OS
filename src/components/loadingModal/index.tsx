import React from "react";
import { View, ActivityIndicator, Modal } from "react-native";

const LoadingModal = ({ visible }) => (
	<Modal
		transparent={true}
		visible={visible}
	>
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
			}}
		>
			<ActivityIndicator
				size="large"
				color="#ffffff"
			/>
		</View>
	</Modal>
);

export default LoadingModal;
