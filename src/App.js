import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import FAQ from "./pages/FAQ";
// import Contact_us from "./pages/Contact_us";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Sponsors from "./pages/Sponsors";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export default function App() {
  return (
    <div className="flex bg-white">
      <ReactNotification />
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} /> */}
            <Route path="/gallery" component={Gallery} />
            <Route path="/faq" component={FAQ} />
            {/* <Route path="/contact-us" component={Contact_us} /> */}
            <Route path="/register" component={Register} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}
