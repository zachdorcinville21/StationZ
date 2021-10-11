import ThemeProvider from './context/theme';
import StationZ from './components/StationZ';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <StationZ />
    </ThemeProvider>
  );
}

export default App;
