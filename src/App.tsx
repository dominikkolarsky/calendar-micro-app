function App({ domElement }: { domElement: HTMLElement }) {
  const attribute = domElement.getAttribute('data-attribute-1');

  return (
    <>
      <div>Hello from micro-frontend-app, called: {attribute}</div>
    </>
  );
}

export default App;
