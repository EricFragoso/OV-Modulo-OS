declare module "ativoType" {
	class Ativo {
		id: string;
		qr: string;
		cliente: string;
		BTU?: string;
		anoFabricacao?: timestamp;
		produto?: string;
		contrato?: string;
		created_at?: timestamp;
	}
	export = Ativo;
}
