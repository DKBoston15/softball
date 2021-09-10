import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import FAQ from "./pages/FAQ";
// import Contact_us from "./pages/Contact_us";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact-us" component={Contact_us} /> */}
          <Route path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
