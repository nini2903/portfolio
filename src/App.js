import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes';
import Layout from './pages/Layout';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Lay = Layout;

                if (route.layout) {
                    Lay = route.layout;
                } else if (route.layout === null) {
                    Lay = Fragment;
                }

                return (
                  
                    <Route
                        key={index}
                        path={route.path}
                        element={
                          <Lay>
                              <Page />  
                          </Lay>
                          
                        }
                    />
                );
            })}
        </Routes>
    </div>
</Router>
  );
}

export default App;
