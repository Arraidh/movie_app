import './App.css';

const Person = () => {
  return (
    <>
      <h1>Name: Ari</h1>
      <h2>last Name: Dharmika</h2>
      <h2>Age: 20</h2>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
      <Person />
      <Person />
      <Person />
    </div>
  );
}

export default App;