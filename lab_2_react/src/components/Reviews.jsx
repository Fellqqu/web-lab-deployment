import { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/11/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="p-8 border-b border-slate-700 hover:bg-slate-700/50 transition-colors col-span-full">
      <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
        Відгуки роботодавців
      </h2>
      {loading ? (
        <p className="text-center text-slate-400">Завантаження відгуків...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-slate-800 p-4 rounded-lg border border-slate-700 shadow"
            >
              <h3 className="font-bold text-blue-300 text-lg mb-1">{comment.name}</h3>
              <p className="text-xs text-slate-400 mb-2">Email: {comment.email}</p>
              <p className="text-sm text-slate-300">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;