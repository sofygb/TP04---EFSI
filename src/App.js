import logo from './logo.svg';
import './App.css';
import ElementoLista from './components/ElementoLista'
import MyForm from './components/Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>ADMINISTRADOR DE PACIENTES</h2>
        <div class="container flex">
          <div class="row">
            <MyForm></MyForm>

            <div class="one-half column">
              <h2>Administra tus citas</h2>
              <ElementoLista nombre="Blacky" dueño="Jere" fecha="2023-05-08" hora="16:15" sintomas="No está comiendo" />
              <ElementoLista nombre="Nina" dueño="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna" />
              <ElementoLista nombre="Sifon" dueño="Flecha" fecha="2023-06-10" hora="09:24" sintomas="Duerme mucho" />
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
