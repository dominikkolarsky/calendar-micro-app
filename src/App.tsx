import './App.css';

function App({ domElement }: { domElement: HTMLElement }) {
  const attribute = domElement.getAttribute('data-attribute-1');

  return (
    <>
      <div className="calendar">
        <div className="calendar__inner">
          <h2>Hello from micro-frontend-app, called: {attribute}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
