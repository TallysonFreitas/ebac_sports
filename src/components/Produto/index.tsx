import { Produto as ProdutoType } from '../../App'
import { RootReducer } from '../../store'
import { adicionar, favoritar } from '../../store/reducers/carrinho'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
  produto: ProdutoType
  aoComprar: (produto: ProdutoType) => void
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const favoritos = useSelector(
    (state: RootReducer) => state.carrinho.favoritos
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(favoritar(produto))} type="button">
        {favoritos.some((item) => item === produto)
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
