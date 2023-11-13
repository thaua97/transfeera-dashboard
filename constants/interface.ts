export const RECEIVERS_TABLE_HEADERS: { key: string, label: string} = [
  {
    key: "name",
    label: "Favorecido"
  },
  {
    key: "tax_id",
    label: "CPF/CNPJ"
  },
  {
    key: "bank_name",
    label: "Banco"
  },
  {
    key: "branch",
    label: "Agencia"
  },
  {
    key: "account",
    label: "CC"
  },
  {
    key: "status",
    label: "Status do favorecido"
  },
]

export const RECEIVERS_STATUS: { validado: string, rascunho: string} = {
  validado: 'Validado',
  rascunho: 'Rascunho',
}