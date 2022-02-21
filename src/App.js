import Header from './components/Header' 
import { app } from './firebase'

function App() {

  return (
    <div className="container">
      <header />
      <h1>Cold Case Catcher</h1>
      <h2>Homepage with search bar and preview of cases</h2>
    </div>
  );
}

export default App;
