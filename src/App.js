import React, { useState, useEffect } from 'react';
import TextArea from './components/TextArea';
import * as Loader from "react-loader-spinner";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
 }, []);
  return (
    <div>
      {loading ? (
          <div className="border d-flex align-items-center justify-content-center">
            <Loader.Rings type="Puff" color="#00BFFF" height={800} width={500} />
          </div>
      ) : (
          <TextArea />
      )}
      </div>
  );
}
export default App;