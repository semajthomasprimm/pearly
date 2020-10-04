import React from 'react';
import CTAIndex from './ctas/CTAIndex';
import NavbarIndex from './navbars/NavbarIndex';
import PricingIndex from './pricings/PricingIndex';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="text-center py-10 mx-auto">
        <div className="mx-16 lg:mx-16">
          <h1 className="mx-16 py-8 mb-8 text-3xl font-semibold text-white shadow-xl bg-purple-500 rounded-lg"><Link to="/">Pearly Component Library</Link></h1>
          <div className="mx-16 my-2 flex items-center grid grid-flow-row md:grid-flow-col gap-3">
              <div className="px-4 py-2  rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/navbars">Navbars</Link></div>
              <div className="px-4 py-2  rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/ctas">CTAs</Link></div>
              <div className="px-4 py-2  rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/heroes">Heroes</Link></div>
              <div className="px-4 py-2  rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/clients">Clients</Link></div>
              <div className="px-4 py-2  rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/features">Features</Link></div>
          </div>
          <div className="mx-16 my-2 flex items-center grid grid-flow-row md:grid-flow-col gap-3">
              <div className="px-4 py-2  rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/teams">Teams</Link></div>
              <div className="px-4 py-2  rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/faqs">FAQs</Link></div>
              <div className="px-4 py-2  rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/testimonials">Testimonials</Link></div>
              <div className="px-4 py-2  rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/pricings">Pricings</Link></div>
              <div className="px-4 py-2  rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/footers">Footers</Link></div>
          </div>
          <Switch>
            <Route exact path="/">
              <h1 className="text-center text-purple-800 text-xl md:text-3xl py-24">Welcome, click on a category to view its components.</h1>
            </Route>
            <Route path="/navbars">
              <NavbarIndex />
            </Route>
            <Route path="/ctas">
              <CTAIndex />
            </Route>
            <Route path="/heroes">
              <h2 className="text-center text-purple-600 text-2xl p-8">Heroes</h2>
              <h3 className="text-center text-purple-500 text-xl">Coming Soon</h3>
            </Route>
            <Route path="/clients">
              <h2 className="text-center text-purple-600 text-2xl p-8">Clients</h2>
              <h3 className="text-center text-purple-500 text-xl">Coming Soon</h3>
            </Route>
            <Route path="/features">
              <h2 className="text-center text-purple-600 text-2xl p-8">Features</h2>
              <h3 className="text-center text-purple-500 text-xl">Coming Soon</h3>
            </Route>
            <Route path="/teams">
              <h2 className="text-center text-purple-600 text-2xl p-8">Teams</h2>
              <h3 className="text-center text-purple-500 text-xl">Coming Soon</h3>
            </Route>
            <Route path="/faqs">
              <h2 className="text-center text-purple-600 text-2xl p-8">FAQs</h2>
              <h3 className="text-center text-purple-500 text-xl">Coming Soon</h3>
            </Route>
            <Route path="/testimonials">
              <h2 className="text-center text-purple-600 text-2xl p-8">Testimonials</h2>
              <h3 className="text-center text-purple-500 text-xl">Coming Soon</h3>
            </Route>
            <Route path="/pricings">
              <PricingIndex />
            </Route>
            <Route path="/footers">
              <h2 className="text-center text-purple-600 text-2xl p-8">Footers</h2>
              <h3 className="text-center text-purple-500 text-xl">Coming Soon</h3>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
