export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			home: undefined;
			menuos: {
				lista: Array[];
			};
			criaros: {
				idLido?: string;
				cnpjLido?: string;
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
			leitorqrcode: {
				flagCriar?: any;
			};
			cameraativo: undefined;
		}
	}
}
