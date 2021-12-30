import React from "react";

const buttonA = <button>Primeiro Botão</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

const App = () => {

    const renderShowHistory = () => (
        <div>
        Clique no botão abaxior para visualizar o histórico dos clientes
        <br />
        {buttonA}
  </div>
) 
    const renderAddCustomer = () => (
        <div>
        Clique abaixo para cadastrar o clientes
        <br />
        {buttonB}
    </div>
)


const showCustomer = () => {

    if (!hasCustomer) return null

    return (
        <div>
            <h3>Nome do cliente: Diego Miranda</h3>
        </div>
    )
}

return (
    <div>
        <h1>Digital Innovation on</h1>
        <h2>Bem Vindo a nossa aula =D</h2>
        {hasCustomer ? renderShowHistory() : renderAddCustomer()}      
        <div>
            {showCustomer()}
        </div>  
    </div>
    );
};
export default App;