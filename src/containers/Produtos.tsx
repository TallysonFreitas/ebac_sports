import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos, adicionarAoCarrinho }: Props) => {
  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            aoComprar={adicionarAoCarrinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
