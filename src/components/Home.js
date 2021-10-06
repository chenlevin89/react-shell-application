import './Home.css';

export default function Home({counter}) {
  return (
    <div className="Home">
      <div>
        <h2>Current Balance</h2>
        <h3>{counter}$</h3>
      </div>
    </div>
  );
}