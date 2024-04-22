import React from 'react'

const About = () => {
  return (
    <>

        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  About Echostream
                </h2>
                <p className="mt-6 text-gray-600">
                  Echostream aim is to provide user-friendly interface by using voice command,
                  and voice vocal features contribute to the evolution and enhancement of the podcasting medium,
                  making it more accessible, engaging, and impactful for diverse audiences.

                </p>
                <p className="mt-4 text-gray-600">
                  {" "}

                </p>
              </div>
            </div>
          </div>


          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Our Mission</h2>
                <p className="mt-6 text-gray-600">
                  At Echostrean, our mission is to empower creators and connect them with
                  audiences through the power of audio. We strive to provide a diverse
                  range of high-quality audio content that entertains, educates, and
                  inspires people from all walks of life.
                </p>
              </div>

              <div className="md:5/12 lg:w-5/12">
                <img
                  src="https://cdn.create.vista.com/api/media/small/144063509/stock-photo-young-woman-listening-to-music-from-your-smart-phone-on-the-grasn"
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Have questions or feedback? Reach out to us!
            </p>
            <ul className="mt-4">
              <li className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a8 8 0 018 8c0 3.24-2.35 6.09-5.45 6.73a1 1 0 01-.77-.11l-1.97-1.1a2 2 0 00-2.56 0l-1.97 1.1a1 1 0 01-1.27-1.27l1.1-1.97a2 2 0 000-2.56l-1.1-1.97a1 1 0 011.27-1.27l1.97 1.1c.24.13.5.2.77.11C7.65 5.91 10 8.76 10 12a6 6 0 01-6-6c0-1.14.32-2.19.86-3.08A1 1 0 016 3h8a1 1 0 01.95.68c.54.89.86 1.94.86 3.08a6 6 0 01-6 6c-1.14 0-2.19-.32-3.08-.86A1 1 0 013 13V8.55a1 1 0 011-1h.45a8 8 0 015.1-4.77z" />
                </svg>
                contact@echostream.com
              </li>
              <li className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                ></svg>
              </li>
            </ul>
          </div>
        </div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          
          <div className="flex items-center mt-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/2048px-Podcasts_%28iOS%29.svg.png"
              alt="Kuku FM Icon"
              className="w-8 h-8 mr-2"
            />
            <span className="text-sm">Echostream</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* General Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">General</h3>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
            {/* About Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Legals</h3>
              <ul>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </footer>


    </>


  )
}

export default About;