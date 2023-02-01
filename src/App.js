import DynamicLoad from './components/DynamicLoad';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/contact">
                <DynamicLoad
                  dynamicImport={() => import('vueRemote/CreateApp')}
                  props={{email: "atm-app@js.com"}} />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
