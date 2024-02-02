import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <header className="py-5 text-center">
        <h1 className="display-4">Arsenal Admin Hub</h1>
      </header>
      <main>
        <div className="py-5 text-center">
            <h4>Please use the links in the navbar</h4>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">Manage Team</h2>
                <p className="card-text">Allows you to manually manage active players</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">Full Squad</h2>
                <p className="card-text">View all the players currently in the squad</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">Fixtures</h2>
                <p className="card-text">Info on our upcoming matches</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center mt-5">
        <p>For More Information On The Club, Please Visit Our <a href="https://www.arsenal.com/" target="_blank" rel="noopener noreferrer">Website</a>.</p>
      </footer>
    </div>
  );
};

export default Home;