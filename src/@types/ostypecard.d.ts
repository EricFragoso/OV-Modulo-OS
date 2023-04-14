declare module "OSTypeCard" {
	class OS {
		id: string;
		numero: string;
		cliente: string;
		infoCliente?: string;
		demandante?: string;
		cnpj: string;
		telefone?: string;
		data?: timestampstring;
		hora?: timestampstring;
		ocorrencia?: string;
		prioridade?: string;
		cidade?: string;
		motivo?: string;
		tipoAtendimento?: string;
		colaborador: string;
		inicio?: timestampstring;
		finalizacao?: timestampstring;
		solucao?: string;
	}
	export = OS;
}
