import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useReStoreScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    try {
      let scrollY = sessionStorage.getItem(pathname);
      scrollY && window.scrollTo(0, scrollY);
    } catch (error) {
      throw error;
    }
    return () => {
      try {
        sessionStorage.setItem(pathname, window.scrollY); //这里使用scrollY是获取文档window在垂直页面
      } catch (error) {
        //的滚动值，如果是特定DOM元素用srcollTop
        throw error;
      }
    };
  }, [pathname]);
}
