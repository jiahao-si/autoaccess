import * as React from "react";
import * as ReactDOM from "react-dom";

import { Home } from "./modules/Public";

ReactDOM.render(<Home />, document.getElementById("react-root"));

/*
<Router history={browserHistory}>
                        <Route path="/" component={Public}>
                                <Route path="/metric" component={MetricManage}></Route>
                                    <Router path="/qce"
                                <Route path="/view" component={ViewManage}></Route>                      
                        </Route>
                    </Router
*/