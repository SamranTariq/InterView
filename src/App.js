import { Route, Switch } from "react-router-dom";
import CommentWidgete from "./comment widget/layout";
import Footer from "./main/footer/footer";
import Header from "./main/header/header";
import Main from "./main/main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/component-widget" component={CommentWidgete} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
