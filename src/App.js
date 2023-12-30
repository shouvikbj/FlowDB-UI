import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "FlowDB | Landing Page";
    return () => {
      document.title = "FlowDB";
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-white">
      <header className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">FlowDB Solutions</h1>
          <p className="text-lg">Empowering Your Data in the Cloud</p>
        </div>
      </header>
      <main className="container mx-auto py-12 px-2">
        <section className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h2 className="text-4xl font-bold mb-4 text-blue-500">
              Effortless Data Management
            </h2>
            <p className="text-gray-300 leading-loose text-justify">
              Our cloud database solution offers seamless data management,
              allowing you to focus on building great applications. Enjoy easy
              integration and scale effortlessly as your data grows.
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://www.techrepublic.com/wp-content/uploads/2022/06/cloud-databases-on-premises-persists.jpeg"
              alt="Database Icon"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
            <img
              src="https://img.pikbest.com/png-images/big-data-icon-set-of-analytic--data-security--network-folder--scalability--database-and-cl_5527461.png!sw800"
              alt="Secure Data Icon"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-4 text-blue-500">Secure Your Data</h2>
            <p className="text-gray-300 leading-loose text-justify">
              Security is our top priority. Benefit from robust encryption and
              authentication mechanisms to keep your data safe. Rest easy
              knowing that your data is protected by state-of-the-art security
              features.
            </p>
          </div>
        </section>
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-500">Key Features</h2>
          <p className="text-gray-300">
            Explore the features that make CloudDB Solutions the right choice
            for your business.
          </p>
          <ul className="list-none text-left mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <li className="bg-gray-800 shadow-md p-4 rounded-3xl">
              <h3 className="text-lg font-semibold mb-2 text-center">
                Scalable and Flexible Architecture
              </h3>
              <p className="text-gray-300 text-justify">
                Our database solution provides a scalable and flexible
                architecture to meet your growing needs.
              </p>
            </li>
            <li className="bg-gray-800 shadow-md p-4 rounded-3xl">
              <h3 className="text-lg font-semibold mb-2 text-center">
                Real-time Data Sync
              </h3>
              <p className="text-gray-300 text-justify">
                Enjoy real-time data synchronization across devices, ensuring
                your data is always up to date.
              </p>
            </li>
            <li className="bg-gray-800 shadow-md p-4 rounded-3xl">
              <h3 className="text-lg font-semibold mb-2 text-center">Intuitive APIs</h3>
              <p className="text-gray-300 text-justify">
                Our developer-friendly APIs make integration easy and provide an
                intuitive experience.
              </p>
            </li>
            <li className="bg-gray-800 shadow-md p-4 rounded-3xl">
              <h3 className="text-lg font-semibold mb-2 text-center">
                Automated Backup & Recovery
              </h3>
              <p className="text-gray-300 text-justify">
                Benefit from automated backup processes and disaster recovery to
                keep your data secure.
              </p>
            </li>
          </ul>
        </section>
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-500">What Our Clients Say</h2>
          <div className="flex flex-col lg:flex-row items-center justify-around mt-8">
            <div className="w-full lg:w-1/3 lg:mb-0 mb-8">
              <img
                src="https://avatars.githubusercontent.com/u/30182097?v=4"
                alt="Client 1"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-300">
                "FlowDB Solutions has transformed the way we handle our data.
                It's reliable, efficient, and has simplified our development
                process."
              </p>
              <p className="text-gray-200 mt-2">
                - John Doe, CEO at Tech Innovations
              </p>
            </div>
            <div className="w-full lg:w-1/3">
              <img
                src="https://media.licdn.com/dms/image/D5603AQGsVDXx2vKR3g/profile-displayphoto-shrink_800_800/0/1703090344747?e=1709164800&v=beta&t=xw-KOBY1_bTPU9TbuGDX16PTBT1Oi5gc_olUaQWAX5c"
                alt="Client 2"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-300">
                "The security features provided by FlowDB Solutions give us
                peace of mind. Our data is in good hands."
              </p>
              <p className="text-gray-200 mt-2">
                - Jane Smith, CTO at SecureTech
              </p>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-500">Get Started Today</h2>
          <p className="text-gray-300">
            Ready to experience the power of FlowDB Solutions? Sign up now and
            take your applications to the next level.
          </p>
          <a
            href="/signup"
            className="bg-blue-500 text-white px-6 py-3 rounded-full mt-6 inline-block transition duration-300 hover:bg-blue-600"
          >
            Sign Up
          </a>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 FlowDB Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
