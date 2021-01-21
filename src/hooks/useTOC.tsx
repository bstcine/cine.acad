import { useEffect } from 'react';
import tocbot from 'tocbot';
import 'tocbot/dist/tocbot.css';

const useTOC = () => {
  useEffect(() => {
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.js-toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.js-toc-content',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1,h2,h3',
      // For headings inside relative or absolute positioned containers within content.
      hasInnerContainers: false,
      collapseDepth: 6,
      headingsOffset: 40,
      // @ts-ignore
      scrollSmoothOffset: -40,
      positionFixedSelector: '.js-toc',
      scrollSmooth: false,
    });
    return () => {
      tocbot.destroy();
    };
  }, []);
};

export default useTOC;
