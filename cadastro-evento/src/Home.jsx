import React from "react";
import "./Home.css"; // Importar estilos da página inicial

function Home() {
    return (
        <div>
            <div className="frame">
                <div className="text-wrapper">Página Inicial</div>
            </div>
            <div className="container">
                <div className="navbar"></div>
                <div className="row">
                    <div className="col">
                        <h1>Gestão de Eventos</h1>
                    </div>
                    <div className="col">
                        <a href="/register" className="card card1">
                            <h5>Cadastrar Evento</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
