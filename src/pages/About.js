import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 xl:px-0">
      <div className="max-w-3xl">
        <p>
          TailwindTube is a collection of the best Tailwind Css related videos
          on YouTube. All videos are curated by the creator of this site,{' '}
          <a className="hover:underline" href="https://twitter.com/geoff_selby">
            Geoff Selby
          </a>
          .
        </p>
        <p className="mt-4">All rights go to each videos respective creator.</p>
      </div>
    </div>
  );
};

export default About;
