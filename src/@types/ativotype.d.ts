declare module "ativoType" {
	class Ativo {
		id: string;
		numeroAtivo: string;
		qr: string;
		cliente: string;
		BTU: string;
		anoFabricacao: string;
		produto: string;
		contrato: string;
		created_at: string;
	}
	export = Ativo;
}
