import { Link } from 'react-router-dom';

import mixpanel from "../services/mixpanel";

function Teste2() {
    mixpanel.trackPageView({ "Page": "Teste 2" })

    return (
        <div>
            <h1>
                Teste2
            </h1>

            <button onClick={mixpanel.trackEvent('Butão', {"BORAAAAA": "SIMMMMM!"})}>Clicar</button>
            <button onClick={mixpanel.trackEvent('Butão', {"SAIIRRRRR": "NÃOOOOOO"})}>Clucou</button>

            <nav>
                <Link to="/">Home</Link> | <Link to="/teste1">Teste1</Link>
            </nav>
        </div>
    )
}

export default Teste2