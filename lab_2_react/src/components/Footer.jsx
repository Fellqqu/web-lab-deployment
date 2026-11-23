import { useState, useEffect } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    const platform = navigator.platform;
    const userAgent = navigator.userAgent;

    localStorage.setItem('react_osInfo', platform);
    localStorage.setItem('react_browserInfo', userAgent);

    setSysInfo({
      os: localStorage.getItem('react_osInfo'),
      browser: localStorage.getItem('react_browserInfo')
    });
  }, []);

  return (
    <footer className="p-6 text-center text-slate-400 bg-slate-800/50">
      <p className="text-sm hover:text-blue-400 transition-colors cursor-pointer">
        Локація: м. Львів
      </p>
      <p className="text-sm">
        <a className="underline hover:text-blue-400" href="https://github.com/Fellqqu">Мій GitHub</a>
      </p>
      {sysInfo.os && (
        <div className="mt-3 text-xs text-slate-500 space-y-1">
          <p><strong>Система:</strong> {sysInfo.os}</p>
          <p className="break-all"><strong>Браузер:</strong> {sysInfo.browser}</p>
        </div>
      )}
    </footer>
  );
}

export default Footer;
