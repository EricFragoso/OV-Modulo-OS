export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			home: undefined;
			menuos: {
				lista: Array[];
			};
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
			cameraativo: undefined;
		}
	}
}
