import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
      <Person name={'Ari'} lastName={'Dharmika'} age={'20'} />
      <Person name={'Rahel'} lastName={'Cecilia'} age={'19'} />
      <Person name={'Amsal'} lastName={'Herbert'} age={'21'} />

    </div>
  );
}

export default App;