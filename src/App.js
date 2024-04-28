import './App.css';
import TransactionList from './Components/TransactionList';
import TransactionTable from './Components/TransactionTable';


function App() {
  return (
    <div className="App">
      <h1>The Bank of Flartiron</h1>
      <TransactionList/>
      <TransactionTable/>
    </div>
  );
}

export default App;