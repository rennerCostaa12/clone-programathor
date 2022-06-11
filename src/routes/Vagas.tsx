import '../css/vagas.css'
import FormSelect from '../components/FormSelect';
import imageiconThor from '../assets/thor-sticker.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { getVagas } from "../data";
import ButtonNormal from '../components/ButtonNormal';
import FilterMobile from '../components/filters/FilterMobile';
import FilterDesktop from '../components/filters/FilterDesktop';

export default function Vagas() {
    const vagas = getVagas();

    const [nomeVaga, setNomeVaga] = useState('programadores');
    const [tipoContrato, setTipoContrato] = useState('');
    const [nivelExperiencia, setNivelExperiencia] = useState('');

    function handleAllVagas() {
        setTipoContrato('');
        setNivelExperiencia('');
    }

    const WidthWindow = window.screen.width;

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

            <section className="container-vagas">
                <div className='content-vagas'>
                    <div className="breadcrumb">
                        <Link to="/">Início</Link>
                        <p>/ vagas {nomeVaga}</p>
                    </div>

                    {WidthWindow >= 991 ?
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
                                <ButtonNormal textButton="Me cadastrar" colorBtn='#32B796' />
                            </div>
                        </div> : ''
                    }

                    {/*onChange={event => setNomeVaga(event.target.value)} value={nomeVaga}*/}
                    <div className="container-content-vagas">
                        {WidthWindow <= 991 ?
                            <FilterMobile
                                onNivelExperiencia={(e) => setNivelExperiencia(e.target.name)}
                                onTipoContrato={(e) => setTipoContrato(e.target.name)}
                            /> :
                            <FilterDesktop
                                onHandleAllVagas={handleAllVagas}
                                onNivelExperiencia={(e) => setNivelExperiencia(e.target.name)}
                                onTipoContrato={(e) => setTipoContrato(e.target.name)}
                            />}

                        <div className="container-vaga">
                            {vagas.filter((vaga) => {
                                if (vaga.tipo.includes(tipoContrato) && vaga.nivel.includes(nivelExperiencia) && vaga.name.toLocaleLowerCase().includes(nomeVaga.toLocaleLowerCase())) {
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
                </div>

            </section>
        </main>
    )
}