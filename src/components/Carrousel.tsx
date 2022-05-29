import Carousel from 'react-bootstrap/Carousel'
import "../css/carousel.css"
import IconTeste from '../assets/icon-check.png';

export default function Carrousel() {

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                    </li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className='indicator-2'>
                    </li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className='indicator-3'>
                    </li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <p>
                            A plataforma oferece um cadastro de maneira intuitiva, bem como testes com os
                            quais você pode demonstrar suas habilidades. Em pouco tempo consegui agendar
                            entrevistas e me inserir no mercado.
                        </p>

                        <small>Bruno</small>
                        <small>Desenvolvedor Front-End na Wide Desenvolvimento Humano</small>
                    </div>
                    <div className="carousel-item">
                        <p>
                            Gostei muito da plataforma, facilita muito a vida de quem é desenvolvedor,
                            indicando se a vaga é compatível com seu perfil.
                        </p>

                        <small>Ademir</small>
                        <small>Programador Back-End C#</small>

                    </div>
                    <div className="carousel-item">
                        <p>
                            Depois de 4 meses procurando em vários sites de emprego, fiz meu cadastro na
                            ProgramaThor, que por seu foco específico para programadores me permitiu facilmente
                            encontrar uma vaga com o match de 94%, em 3 semanas consegui recolocação no mercado
                            de trabalho. Obrigado Equipe ProgramaThor!
                        </p>

                        <small>Eduardo Garcia</small>
                        <small>Desenvolvedor Full Stack</small>

                    </div>
                </div>
                <div className='content-btn-prev-and-next'>
                    <button className='btn-prev' type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                        <i className="fas fa-arrow-alt-circle-left"></i>
                    </button>
                    <button className='btn-next' type="button" data-target="#carouselExampleIndicators" data-slide="next">
                        <i className="fas fa-arrow-alt-circle-right"></i>
                    </button>
                </div>

            </div>
        </>

    )
}