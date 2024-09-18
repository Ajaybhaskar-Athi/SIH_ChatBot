

    // import React, { useState } from 'react';
    // // import './ImageSlider.css'; // Add this if you want to include custom CSS

    // const slides = [
    // {
    //     image: 'https://www.leadsquared.com/wp-content/uploads/2021/11/Education-Website-Design.png',
    //     content: 'Welcome to Slide 1'
    // },
    // {
    //     image: 'https://via.placeholder.com/1600x900?text=Slide+2',
    //     content: 'Welcome to Slide 2'
    // },
    // {
    //     image: 'https://via.placeholder.com/1600x900?text=Slide+3',
    //     content: 'Welcome to Slide 3'
    // },
    // ];

    // const ImageSlider = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    // };

    // const nextSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    // };

    // return (
    //     <div className="relative mx-2 md:mx-4 my-3 h-[490px]">
    //     <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
    //         <img
    //         src={slides[currentIndex].image}
    //         alt={`Slide ${currentIndex + 1}`}
    //         className="w-full h-full object-cover"
    //         />
    //         <div className="absolute inset-0 bg-black opacity-40"></div>
    //         <div className="absolute inset-y-0 right-0 flex flex-col items-end justify-center p-8 text-white">
    //         <h2 className="text-3xl md:text-5xl font-bold">{slides[currentIndex].content}</h2>
    //         </div>
        
    //         <button
    //         onClick={nextSlide}
    //         className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full"
    //         >
    //         &#10095;
    //         </button>
    //     </div>
    //     </div>
    // );
    // };

    // export default ImageSlider;

    import React, { useState } from 'react';

const slides = [
  {
    image: 'https://www.leadsquared.com/wp-content/uploads/2021/11/Education-Website-Design.png',
    content: 'Welcome to Slide 1'
  },
  {
    image: 'https://via.placeholder.com/1600x900?text=Slide+2',
    content: 'Welcome to Slide 2'
  },
  {
    image: 'https://via.placeholder.com/1600x900?text=Slide+3',
    content: 'Welcome to Slide 3'
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative mx-2 md:mx-2 my-3 h-[490px]">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-y-0 right-0 flex flex-col items-end justify-center p-6 text-white">
          <h2 className="text-xl md:text-3xl font-medium">{slides[currentIndex].content}</h2>
        </div>
     
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
