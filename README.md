# API da Champions - Node.js, Express e TypeScript

Esta é uma API REST para gerenciamento de jogadores e clubes de futebol, desenvolvida com Node.js, Express e TypeScript. O projeto faz parte de um desafio DIO.

## Funcionalidades
- CRUD de jogadores (criar, listar, buscar por ID, atualizar estatísticas, deletar)
- Listagem de clubes (dados em arquivo JSON)
- Respostas padronizadas com status HTTP

## Estrutura do Projeto
```
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── routes.ts
│   ├── controller/
│   ├── service/
│   ├── repositories/
│   ├── models/
│   ├── utils/
│   └── data/
├── package.json
├── tsconfig.json
```

## Instalação
1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` com a variável `PORT` (exemplo: `PORT=3000`)

## Scripts
- `npm run start:dev` — Inicia o servidor em modo desenvolvimento
- `npm run start:watch` — Inicia com hot reload
- `npm run dist` — Gera build de produção
- `npm run start:dist` — Build e executa produção

## Endpoints
### Jogadores
- `GET /api/players` — Lista todos os jogadores
- `GET /api/players/:id` — Busca jogador por ID
- `POST /api/players` — Cria um novo jogador
- `PATCH /api/players/:id` — Atualiza estatísticas do jogador
- `DELETE /api/players/:id` — Remove jogador

### Clubes
- `GET /api/clubs` — Lista todos os clubes

## Modelos
### PlayerModel
```ts
{
  id: number,
  name: string,
  club: string,
  nationality: string,
  position: string,
  statistics: StatisticsModel
}
```
### StatisticsModel
```ts
{
  Overall: number,
  Pace: number,
  Shooting: number,
  Passing: number,
  Dribbling: number,
  Defending: number,
  Physical: number
}
```

## Observações
- Os dados de jogadores são mantidos em memória (não persistem após reiniciar).
- Os clubes são lidos do arquivo `src/data/clubs.json`.

## Autor
Desenvolvido por Matheus Araújo para desafio DIO.
