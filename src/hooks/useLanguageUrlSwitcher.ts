import { useNavigate, useLocation } from 'react-router-dom';

export function useLanguageUrlSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();

  function switchLanguageUrl(newLang: string) {
    let newPath = location.pathname;
    if (newLang === 'en') {
      if (!newPath.startsWith('/en')) {
        newPath = '/en' + (newPath === '/' ? '' : newPath);
      }
    } else {
      if (newPath.startsWith('/en')) {
        newPath = newPath.replace(/^\/en/, '') || '/';
      }
    }
    navigate(newPath + location.search, { replace: true });
  }

  return switchLanguageUrl;
}
