import { Link } from 'react-router-dom';

import mixpanel from "../services/mixpanel";

function Teste1() {
    mixpanel.trackPageView({ "Page": "Teste1" })

    return (
        <div>
            <h1>
                Teste1
            </h1>

            <button onClick={mixpanel.trackEvent('Kayke Clicou', {"Oxi": "Mano!", "Se loko": "Irmao", "Tu": "Vai?"})}>Clicar</button>

            <nav>
                <Link to="/">Home</Link> | <Link to="/teste2">Teste2</Link>
            </nav>
        </div>
    )
}

export default Teste1