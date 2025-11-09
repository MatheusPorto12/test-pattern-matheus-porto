import { Carrinho } from '../../domain/Carrinho.js';
import { Item } from '../../domain/Item.js';
import { UserMother } from './userMother.js';

export class CarrinhoBuilder {
    constructor() {
        // Valores padrão: usuário padrão e 1 item padrão
        this._user = UserMother.umUsuarioPadrao();
        this._itens = [new Item('Produto Padrão', 100.00)];
    }

    comUser(user) {
        this._user = user;
        return this;
    }

    comItens(itens) {
        this._itens = itens;
        return this;
    }

    adicionarItem(item) {
        this._itens.push(item);
        return this;
    }

    vazio() {
        this._itens = [];
        return this;
    }

    build() {
        return new Carrinho(this._user, this._itens);
    }
}

export default CarrinhoBuilder;
