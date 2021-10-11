import './Home.css';

export default function Home({counter}) {
  return (
    <div className="Home">
      <div>
        <h2>User Name</h2>
        <h3>Chen Levin</h3>
        <h2>Status</h2>
        <h3>Active</h3>
        <h2>Last Visit</h2>
        <h3>{new Date(Date.now() - 86400000).toDateString()}</h3>
        <h2>Current Balance</h2>
        <h3>{counter}$</h3>
      </div>
    </div>
  );
}