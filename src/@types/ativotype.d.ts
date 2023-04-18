declare module "ativoType" {
	class Ativo {
		id: string;
		qr: string;
		cliente: string;
		status?: string;
		BTU?: string;
		anoFabricacao?: timestamp;
		produto?: string;
		contrato?: string;
	}
	export = Ativo;
}
