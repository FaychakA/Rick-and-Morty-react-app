import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import Characters from './Components/CharactersList/Characters';
import Locations from "./Components/LocationsList/Locations";
import Episodes from "./Components/EpisodesList/Episodes";
import CharacterPage from "./Components/CharacterPage/CharacterPage";
import LocationPage from "./Components/LocationPage/LocationPage";
import EpisodePage from "./Components/EpisodePage/EpisodePage";
import './App.scss';

function App() {
    return (
        <div className="app">
            <div className="app__header">
                <Header/>
            </div>

            <main className="app__main">
                <Switch>
                    <Route
                        path="/"
                        exact
                    >
                        <Redirect to="/character" />
                    </Route>

                    <Route
                        path="/character"
                        exact
                        component={Characters}
                    />

                    <Route
                        path="/location"
                        exact
                        component={Locations}
                    />

                    <Route
                        path="/episode"
                        exact
                        component={Episodes}
                    />

                    <Route
                    path="/character/:characterId"
                    exact
                    component={CharacterPage}
                    />

                    <Route
                        path="/location/:locationId"
                        exact
                        component={LocationPage}
                    />

                    <Route
                        path="/episode/:episodeId"
                        exact
                        component={EpisodePage}
                    />
                </Switch>
            </main>

            <div className="app__footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
