import logo from './logo.svg';
import './App.css';


function Title({children}) {
    return (
        <div>
            <h2>{children}</h2>
        </div>
    )
}


function Header() {
    return(
        <div>
            <Title>Оглавление</Title>
            <h1>Head</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

    )
}

function Content(){
    return(
        <div>
            <Title>Содержимое моей страницы</Title>
            <h2>Main</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis facere fugit illo illum impedit magnam quaerat quibusdam ratione ut vitae!</p>
        </div>

    )
}

function Footer(){
    return (
        <div>
            <Title>Нижний титул старницы</Title>
            <h2>Footer</h2>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

    )
}

function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;

//Возможно я не правильно понял условие задания
