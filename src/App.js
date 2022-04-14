import './App.css';
import './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {
  const expenses=[
    {
    title:"Condom",amount:209,date:new Date(2020,2,1),
  },
  {
    title:"Vibrator",amount:201,date:new Date(2020,2,1),
  },
  {
    title:"Lube",amount:300,date:new Date(2020,2,1),
  },{
    title:"Tissues",amount:10,date:new Date(2020,2,1),
  },
];
  return (
    <div className="App">
      <h2>Joy's Expense Tracker</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
