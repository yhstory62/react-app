import './App.css';

function Counter(props) {
  console.log('props', props);
  return <div>
    <h1>Counter</h1>
    <button>➕</button> 👉 0
  </div>
}

function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue="10"></Counter>
      <Counter title="입작객 카운터" initValue="20"></Counter>
    </div>
  );
}

export default App;