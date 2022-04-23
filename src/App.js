import './Education';
import './App.css';
import './Header';
import './WorkExperience';
import './TechnologySummaryCard';
import WorkExperienceCard from './WorkExperience';

function App() {
  return (
      <div className="App">
          <Header />
          
          <main className="container">
              <div className="row mt-3">
                  <div className="col-md">
                      <WorkExperience />
                  </div>
                  <div className="col-md">
                      <Education />
                  </div>
              </div>
              <div className="row mt-3">
                  <div className="col-md mb-5">
                      <TechnologySummary />
                  </div>
              </div>
          </main>
      </div>
  );
}

export default App;
