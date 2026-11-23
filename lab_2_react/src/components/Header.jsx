function Header({ theme, toggleTheme }) {
  return (
    <header className="flex justify-between items-center bg-blue-600 text-white p-8 shadow-md">
      <div>
        <h1 className="text-4xl font-bold mb-2 tracking-wide">
          Матвій Козак <span aria-hidden="true">🌊</span>
        </h1>
        <p className="text-xl opacity-90 font-light">
          Студент спеціальності "Кібербезпека" | Розробник
        </p>
      </div>
      <button
        onClick={toggleTheme}
        className="text-2xl p-2 rounded-full hover:bg-blue-700 transition-colors"
        title="Переключити тему"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

export default Header;
