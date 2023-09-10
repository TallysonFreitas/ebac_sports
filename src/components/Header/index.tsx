import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const carrinho = useSelector((state: RootReducer) => state.carrinho)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{carrinho.favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {carrinho.itens.length} itens, valor total: {paraReal(carrinho.valor)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
