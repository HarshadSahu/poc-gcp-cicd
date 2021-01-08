import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website has CI/CD on every commit!
        </p>
        <a
          className="App-link"
          href="https://thoughtstile.medium.com/setup-a-create-react-app-ci-cd-pipeline-on-every-github-commit-via-google-cloud-build-and-google-7ff6cb96cb1d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Commit -> Google Cloud Build -> Google Cloud Run
        </a>
      </header>
    </div>
  );
}

export default App;
