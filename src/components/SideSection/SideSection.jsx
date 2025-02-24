import "./SideSection.css";
import React from "react";

//? SVG's
import ativos from "../../assets/side-content/ativos.svg";
import cadeado from "../../assets/side-content/cadeado.svg";
import diamante from "../../assets/side-content/diamante.svg";
import dinheiro from "../../assets/side-content/dinheiro.svg";
import produtos from "../../assets/side-content/produtos.svg";
import projecao from "../../assets/side-content/projecao.svg";
import resumo from "../../assets/side-content/resumo.svg";
import risco from "../../assets/side-content/risco.svg";
import expand_icon from "../../assets/side-content/expand.svg";

//? Componentes
import SideSectionContent from "../SideSectionContent/SideSectionContent";

const SelectedSection = ({ title, icon }) => {
  return (
    <>
      <div className='select-side-section-content'>
        <div className='section-icon-area'>
          <div className='dot'></div>
        </div>

        <div className='section-title-area'>
          <h3 className='section-content-title'>{title}</h3>
        </div>

        <div className='section-expand'>
          <img src={icon} alt='Expand Icon' />
        </div>
      </div>
    </>
  );
};

const SideSection = () => {
  return (
    <div className='side-section'>
      <SideSectionContent iconSvg={resumo} title='Resumo Da Carteira' />
      <SideSectionContent iconSvg={produtos} title='Meus Produtos' />
      <SideSectionContent iconSvg={dinheiro} title='Meus proventos' />
      <SideSectionContent iconSvg={ativos} title='Classes de Ativos' />
      <SelectedSection iconSvg={"dot"} title='Ação' icon={expand_icon} />
      <SelectedSection iconSvg={"dot"} title='Fundo' icon={expand_icon} />
      <SelectedSection
        iconSvg={"dot"}
        title='Fundo Imobiliário'
        icon={expand_icon}
      />
      <SelectedSection
        iconSvg={"dot"}
        title='Fundo de Renda Fixa'
        icon={expand_icon}
      />
      <SideSectionContent iconSvg={diamante} title='Rentabilidade Real' />
      <SideSectionContent iconSvg={projecao} title='Projeção de Carteira' />
      <SideSectionContent iconSvg={risco} title='Risco x Retorno' />
      <SideSectionContent iconSvg={cadeado} title='Cobertura do FGC' />
    </div>
  );
};

export default SideSection;
