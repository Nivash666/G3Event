import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Photo {
  src: string;
  width: number;
  height: number;
  alt?: string;
  category?: string;
}

interface GalleryProps {
  photos: Photo[];
  categories?: string[];
}

const Gallery = ({ photos, categories }: GalleryProps) => {
  const [index, setIndex] = useState(-1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPhotos = activeCategory
    ? photos.filter((photo) => photo.category === activeCategory)
    : photos;

  const slides = filteredPhotos.map(({ src, width, height, alt }) => ({
    src,
    width,
    height,
    alt,
  }));

  return (
    <div>
      {categories && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeCategory === null
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <PhotoAlbum
        photos={filteredPhotos}
        layout="masonry"
        spacing={8}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1;
          if (containerWidth < 768) return 2;
          if (containerWidth < 1024) return 3;
          return 4;
        }}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default Gallery;