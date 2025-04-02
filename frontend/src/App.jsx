import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>OOPS! Something Got wrong, Error: {error} </p>;

  return (
    <>
      <h1>Jokes</h1>
      <p>Total jokes: {jokes.length}</p>
      <div className="flex flex-col gap-3 mt-6 text-zinc-800 ">
        {jokes.map((joke) => {
          return (
            <div
              className="px-4 py-3 bg-zinc-300 rounded-2xl shadow-zinc-300 shadow-sm"
              key={joke?.id}
            >
              <h2 className="text-xl font-black">{joke?.title}</h2>
              <p className=" text-md font-extralight">{joke?.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
