import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminPage from "../components/adminPage/adminPage";
import AplicationForm from "../components/aplicationForm/aplicationForm";
import CreateTrip from "../components/createTrip/createTrip";
import Home from "../components/home/home";
import ListTrip from "../components/listTrip/listTrip";
import Login from "../components/login/login";
import TripDetails from "../components/tripDetails/tripDetails";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/">
                    <Home />
                </Route>

                <Route exact path = "/adminPage">
                    <AdminPage />
                </Route>

                <Route exact path = "/aplicationForm">
                    <AplicationForm />
                </Route>

                <Route exact path = "/createTrip">
                    <CreateTrip />
                </Route>

                <Route exact path = "/listTrip">
                    <ListTrip />
                </Route>

                <Route exact path = "/login">
                    <Login />
                </Route>

                <Route exact path = "/tripDetails">
                    <TripDetails />
                </Route>

                <Route>
                    <div>Pagina não encontrada </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;