SELECT FORNECEDOR.CODIGO_FORNECEDOR, PECA.PRECO FROM FORNECEDOR, PECA, FORNECIMENTO
WHERE FORNECEDOR.CODIGO_FORNECEDOR = FORNECIMENTO.CODIGO_FORNECEDOR 
AND FORNECEDOR.CIDADE = 'VITORIA' AND FORNECIMENTO.CODIGO_PECA = 'MOTOR' AND FORNECIMENTO.CODIGO_CARRO = 'KOMBI' 
AND PECA.CODIGO_PECA = FORNECIMENTO.CODIGO_PECA