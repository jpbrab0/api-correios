# Api para consultar cep.

## Apresentação

Está api foi criada para consultar cep's

## Instalação

Requesitos
* NodeJs

Clonando repositório
```git
git clone https://github.com/jpbrab0/api-correios
```
Instalando dependencias
```bash
npm install
```
Rodando projeto
```bash
npm run dev
```

# Buscando um cep

Para buscar um cep você precisa fazer uma requisição do tipo POST na rota "/" com o parametro do cep.
Exemplo:

``http://localhost:3333/{seucep}``

E vai ter o seguinte retorno:

```json
{
  "message": "",
  "uf": "",
  "localidade": "",
  "logradouro": "",
  "bairro": ""
}
```