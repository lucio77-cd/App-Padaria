// db-paths.js
// ══════════════════════════════════════════════════════════════
// Ponto único de conhecimento sobre COMO os dados de cada negócio
// são endereçados no Firestore. Antes desta mudança (Frente 0.1),
// cada página montava strings como `estoque_${uid}` na mão — uma
// convenção que o código-cliente prometia respeitar, mas que a
// regra de segurança do servidor não conseguia verificar (Cap. 4).
//
// Agora todo dado de um negócio vive sob /users/{uid}/..., e este
// arquivo é o ÚNICO lugar que sabe montar esse caminho. Se um dia
// a estrutura mudar de novo, muda aqui — não em 9 arquivos HTML.
// ══════════════════════════════════════════════════════════════
import { db } from './firebase.js';
import {
  collection, doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Documento de perfil do negócio: /users/{uid}
export function userDoc(uid) {
  return doc(db, 'users', uid);
}

// Coleção de primeiro nível dentro do negócio: /users/{uid}/{nome}
// Ex: col(uid, 'estoque'), col(uid, 'vendas'), col(uid, 'pessoas')
export function col(uid, nome) {
  return collection(db, 'users', uid, nome);
}

// Documento dentro de uma coleção de primeiro nível: /users/{uid}/{nome}/{id}
// Ex: docIn(uid, 'estoque', produtoId)
export function docIn(uid, nome, id) {
  return doc(db, 'users', uid, nome, id);
}

// Subcoleção dentro de um documento (ex: movimentos de um produto):
// /users/{uid}/estoque/{produtoId}/movimentos
export function subCol(uid, colPai, idPai, subNome) {
  return collection(db, 'users', uid, colPai, idPai, subNome);
}

// Documento dentro de uma subcoleção:
// /users/{uid}/estoque/{produtoId}/movimentos/{movimentoId}
export function subDocIn(uid, colPai, idPai, subNome, subId) {
  return doc(db, 'users', uid, colPai, idPai, subNome, subId);
}

// Referência com ID automático, SEM gravar nada ainda.
// Necessário para criar documentos novos DENTRO de uma transação —
// addDoc não funciona em runTransaction, mas tx.set(ref, dados) sim,
// desde que a referência já exista antes da transação começar.
export function novoDocIn(uid, nome) {
  return doc(col(uid, nome));
}
