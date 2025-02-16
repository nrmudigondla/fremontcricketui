import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import Home from './components/home/home.component';
import TeamPlayerInfo from './components/team-player-info/teamplayerinfo.component';
import LiveScoring from './components/live-scoring/live-scoring.component';
import SetUpMatchComponent from './components/setup-match/setup-match.component';
import OverScoreComponent from './components/over-score/over-score.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team/:id" element={<TeamPlayerInfo />} />
          <Route path="live-scoring" element={<LiveScoring />} />
          <Route path="setup-newmatch" element={<SetUpMatchComponent />} />
          <Route path="over-score" element={<OverScoreComponent />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
