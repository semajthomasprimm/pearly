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
          <h1 className="mx-16 py-8 mb-8 text-3xl font-semibold text-white shadow-xl bg-purple-500 rounded-lg">Pearly Component Library</h1>
          <div className="mx-16 flex items-center">
            <ul className="flex">
              <li 
                className="px-4 py-2 mx-2 rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300">
                  <Link to="/navbars">Navbars</Link>
              </li>
              <li className="px-4 py-2 mx-2 rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/ctas">CTAs</Link></li>
              <li className="px-4 py-2 mx-2 rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/heroes">Heroes</Link></li>
              <li className="px-4 py-2 mx-2 rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/clients">Clients</Link></li>
              <li className="px-4 py-2 mx-2 rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/features">Features</Link></li>
              <li className="px-4 py-2 mx-2 rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/teams">Teams</Link></li>
              <li className="px-4 py-2 mx-2 rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/faqs">FAQs</Link></li>
              <li className="px-4 py-2 mx-2 rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/testimonials">Testimonials</Link></li>
              <li className="px-4 py-2 mx-2 rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/pricings">Pricings</Link></li>
              <li className="px-4 py-2 mx-2 rounded-full bg-purple-300 hover:bg-purple-700 text-purple hover:text-gray-300"><Link to="/footers">Footers</Link></li>
            </ul>
          </div>
          <Switch>
            <Route path="/navbars">
              <NavbarIndex />
            </Route>
            <Route path="/ctas">
              <CTAIndex />
            </Route>
            <Route path="/heroes">
              <h2 className="text-center text-purple-600 text-2xl p-8">Heroes</h2>
            </Route>
            <Route path="/clients">
              <h2 className="text-center text-purple-600 text-2xl p-8">Clients</h2>
            </Route>
            <Route path="/features">
              <h2 className="text-center text-purple-600 text-2xl p-8">Features</h2>
            </Route>
            <Route path="/teams">
              <h2 className="text-center text-purple-600 text-2xl p-8">Teams</h2>
            </Route>
            <Route path="/faqs">
              <h2 className="text-center text-purple-600 text-2xl p-8">FAQs</h2>
            </Route>
            <Route path="/testimonials">
              <h2 className="text-center text-purple-600 text-2xl p-8">Testimonials</h2>
            </Route>
            <Route path="/pricings">
              <PricingIndex />
            </Route>
            <Route path="/footers">
              <h2 className="text-center text-purple-600 text-2xl p-8">Footers</h2>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
