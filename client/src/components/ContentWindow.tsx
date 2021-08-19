import React from 'react';

interface ContentWindowProps {
  content: {
    title: string;
    body: string;
  };
}
const ContentWindow: React.FC<ContentWindowProps> = ({ content }) => {
  return (
    <section className='content-wrapper'>
      <article className='content'>
        <h1>{content.title}</h1>
        {content.body.split('\n').map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </article>
    </section>
  );
};

export default ContentWindow;
