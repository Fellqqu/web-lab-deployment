import { useState, useEffect } from 'react';

const contactFormDelayMs = 60_000;

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, contactFormDelayMs);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-slate-800 text-slate-100 p-6 rounded-xl shadow-2xl w-full max-w-md relative border border-slate-700">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-2xl text-slate-400 hover:text-red-400 font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">
          Зворотний зв'язок
        </h2>
        <form
          action="https://formspree.io/f/maeelpaa"
          method="POST"
          className="flex flex-col gap-3"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Ім'я:</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 rounded bg-slate-700 border border-slate-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 rounded bg-slate-700 border border-slate-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Номер телефону:</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full p-2 rounded bg-slate-700 border border-slate-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Повідомлення:</label>
            <textarea
              name="message"
              rows="3"
              required
              className="w-full p-2 rounded bg-slate-700 border border-slate-600 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded transition-colors"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
