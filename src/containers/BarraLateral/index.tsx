import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Pendentes" contador={1} />
        <FiltroCard legenda="Concluídas" contador={2} />
        <FiltroCard legenda="Urgentes" contador={3} />
        <FiltroCard legenda="Importantes" contador={5} />
        <FiltroCard legenda="Normal" contador={6} />
        <FiltroCard legenda="Todas" contador={17} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
