import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

const initialState: estado = {
  itens: [],
  valor: 0,
  favoritos: []
}

type estado = {
  itens: number[]
  valor: number
  favoritos: Produto[]
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((item) => item === produto.id)) {
        alert('o produto ja se encontra no carrinho')
      } else {
        state.itens = [...state.itens, produto.id]
        state.valor = state.valor + produto.preco
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      if (state.favoritos.some((item) => item.id === action.payload.id)) {
        state.favoritos = state.favoritos.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.favoritos = [...state.favoritos, action.payload]
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions

export default carrinhoSlice.reducer
