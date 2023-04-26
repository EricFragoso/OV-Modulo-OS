export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			home: undefined;
			listos: {
				lista: Array[];
			};
			detailos: {
				ID: string;
				AtivoNumero?: string;
			};
			detailativo: {
				ID?: string;
				idAtivo: string;
			};
			leitorqrcode: undefined;
			cameraativo: {
				idAtivo?: string;
			};
		}
	}
}
