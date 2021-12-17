import './App.css';
import Profile from './components/Profile';
import Todo from './components/Todo';
import UserData from './components/UserData';

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Welcome to React Hooks and Unit Testing</h1>
      <Profile />
      
      <UserData />

      < hr/>
      <Todo />
    </div>
  );
}

export default App;
