import React from 'react';
import Linkify from 'react-linkify';

const VideoDescription = ({ description }) => {
  const getDescriptionParagraphs = () => {
    const videoDescription = description;
    if (!videoDescription) {
      return null;
    }
    return videoDescription.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-4 description">
        <Linkify>{paragraph}</Linkify>
      </p>
    ));
  };

  if (description !== '') {
    return (
      <div className="mt-4 container mx-auto px-6 xl:px-0">
        <div className="text-sm md:text-base w-full lg:w-2/3">
          {getDescriptionParagraphs()}
        </div>
      </div>
    );
  }

  return null;
};

export default VideoDescription;
