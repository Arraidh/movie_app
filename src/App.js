import './App.css';

const App = () => {
  const name = 'Ari';
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : 'sing ade nyen'}</h1>
    </div>
  );
}

export default App;