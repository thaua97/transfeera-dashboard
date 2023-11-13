export function formatTaxId(document: string): string {
  const cleanedDocument = document.replace(/\D/g, '');

  if (cleanedDocument.length === 11) {
    // Formata CPF: XXX.XXX.XXX-XX
    return cleanedDocument.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  } else if (cleanedDocument.length === 14) {
    // Formata CNPJ: XX.XXX.XXX/XXXX-XX
    return cleanedDocument.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

  // Retorna o documento sem formatação se não for CPF nem CNPJ
  return cleanedDocument;
}