import '../css/vagas.css'
import Button from "../components/ButtonNormal";
import ButtonFilter from '../components/ButtonFilter';
import FormSelect from '../components/FormSelect';
import imageiconThor from '../assets/thor-sticker.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { getVagas } from "../data";

export default function Vagas() {
    const vagas = getVagas();

    const [nomeVaga, setNomeVaga] = useState('programadores');
    const [tipoContrato, setTipoContrato] = useState('');
    const [nivelExperiencia, setNivelExperiencia] = useState('');

    function handleAllVagas() {
        setNivelExperiencia('');
        setTipoContrato('');
    }

    return (
        <main>
            <div className="container-vagas-banner">
                <div className="vagas-content">
                    <h1>Vagas para Programadores de Desenvolvedores</h1>

                    <p>Domina alguma linguagem de programação (Front-End, Back-End, Mobile ou Full Stack)?</p>
                    <p>Quer ser contratado como freelancer (PJ), estagiário ou CLT?</p>
                    <p>Então você está no lugar certo!</p>

                    <div className="input-group">
                        <FormSelect onchange={(e) => setNomeVaga(e.target.value)} valueForm={nomeVaga} />
                    </div>
                </div>
            </div>

            <section className="container-contentmain">
                <div className="breadcrumb">
                    <Link to="/">Início</Link>
                    <p>/ vagas {nomeVaga}</p>
                </div>
                <div className="container-cadastro-thor">
                    <div className="img-icon-thor">
                        <img src={imageiconThor} alt="ícone do Thor" />
                    </div>
                    <div className="create-perfil-content">
                        <Link to="/">
                            Crie um perfil na ProgramaThor para <strong> ser notificado assim que acontecer um matching entre uma vaga e o seu perfil.</strong>
                        </Link>
                    </div>

                    <div className="btn-mecadastrar">
                        <Button textButton="Me cadastrar" />
                    </div>
                </div>

                {/*onChange={event => setNomeVaga(event.target.value)} value={nomeVaga}*/}
                <div className="container-content-vagas">
                    <div className="content-filter">
                        <div className="filtrar-all">
                            <h2 className="text-filter">Filtrar:</h2>
                            <ButtonFilter onclick={handleAllVagas} nameButton="TODAS" styleButton="btns-filter" />
                        </div>
                        <div className="filtrar-contrato">
                            <h2 className="text-filter">Tipo de contrato:</h2>
                            <ButtonFilter onclick={() => setTipoContrato("CLT")} nameButton="CLT" styleButton="btns-filter" />
                            <ButtonFilter onclick={() => setTipoContrato("PJ")} nameButton="PJ" styleButton='btns-filter' />
                            <ButtonFilter onclick={() => setTipoContrato("Estágio")} nameButton="Estágio" styleButton='btns-filter' />
                        </div>
                        <div className="nivel-de-experiencia">
                            <h2 className="text-filter">Nível de experiência</h2>
                            <ButtonFilter onclick={() => setNivelExperiencia("Júnior")} nameButton="Júnior" styleButton="btns-filter" />
                            <ButtonFilter onclick={() => setNivelExperiencia("Pleno")} nameButton="Pleno" styleButton='btns-filter' />
                            <ButtonFilter onclick={() => setNivelExperiencia("Sênior")} nameButton="Sênior" styleButton='btns-filter' />
                        </div>
                        {/*
                            <div className="width-empresa">
                            <h2 className="text-filter">Tamanho da empresa</h2>
                            <button className="btns-filter">Startup</button>
                            <button className="btns-filter">Grande empresa</button>
                            <button className="btns-filter">Pequena/média empresa</button>
                        </div>

                         <div className="cidade-vaga">
                            <h2 className="text-filter">Cidade da vaga</h2>
                            <div className="group-searchfilter">
                                <input type="text" placeholder="Cidade" />
                                <button><i className="fas fa-search"></i></button>
                            </div>
                            <div className="btns-cidade">
                                <button className="btns-filter">Remoto</button>
                                <button className="btns-filter">Aceita candidatos de fora</button>
                            </div>
                        </div>
                        */
                        }
                    </div>

                    <div className="container-vaga">
                        {vagas.filter((vaga) => {
                            if (vaga.tipo.includes(tipoContrato) && vaga.nivel.includes(nivelExperiencia) && vaga.name.toLocaleLowerCase().includes(nomeVaga.toLocaleLowerCase())) {
                                console.log(vaga)
                                return vaga;
                            } else if (nomeVaga === "programadores" && vaga.tipo.includes(tipoContrato) && vaga.nivel.includes(nivelExperiencia)) {
                                return vaga;
                            }

                        }).map((vaga, key) => {
                            return (
                                <div className="content-vaga" key={key}>
                                    <div className='content-image'>
                                        <img src={vaga.image} alt="logo-company" />
                                    </div>
                                    <div className='content-vaga-description'>
                                        <h1>{vaga.name}</h1>
                                        <span className="descricao-vaga">{vaga.descricao}</span>
                                        <div className="status-vaga">
                                            <span><i className="fas fa-map-marker-alt"></i>{vaga.local}</span>
                                            <span><i className="far fa-file-alt"></i>{vaga.tipo}</span>
                                            <span><i className="far fa-chart-bar"></i>{vaga.nivel}</span>
                                            <span><i className="far fa-money-bill-alt">R$</i>{vaga.salario}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}