// import React, { Component } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect
// } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
// import Protected from "./pages/Protected";
// import API from "./utils/API";

// class SignUpSignIn extends Component {
//   render() {
//     return (
//       <Router>
//         {this.state.display ? (
//           <div>
//             <Switch>
//               <Route exact path="/profile">
//                 {this.state.authorized ? (
//                   <Protected logout={this.logout} />
//                 ) : (
//                   <Redirect to="/login" />
//                 )}
//               </Route>

//               <Route exact path="/login">
//                 <Login
//                   isAuthorized={this.isAuthorized}
//                   authorized={this.state.authorized}
//                   redirect={window.location.pathname}
//                 />
//               </Route>

//               <Route exact path="/register">
//                 {this.state.authorized ? (
//                   <Redirect to="/" />
//                 ) : (
//                   <Register isAuthorized={this.isAuthorized} />
//                 )}
//               </Route>

//               <Route exact path="/protected">
//                 {this.state.authorized ? (
//                   <Protected logout={this.logout} />
//                 ) : (
//                   <Redirect to="/login" />
//                 )}
//               </Route>

//               <Route>
//                 <Redirect to="/" />
//               </Route>
//             </Switch>
//           </div>
//         ) : (
//           ""
//         )}
//       </Router>
//     );
//   }
// }

// export default SignUpSignIn;
