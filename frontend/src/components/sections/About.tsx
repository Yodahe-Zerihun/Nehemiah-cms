export default function About() {
  return (
    <section id="about" className="relative font-[Halenoir]px-4 py-16 pb-24  bg-[url('@/assets/Bg2.png')] bg-cover bg-center">
 
      <div className="flex flex-row justify-evenly items-center space-x-8 py-16">
        <h2 className="z-10 mx-auto pr-50 text-white uppercase text-xs">About</h2>
        <img src="/src/assets/AboutPhoto.png" alt="" srcSet="" className="w-72 h-64 z-10" />
        <p className="relative z-10 container mx-auto max-w-xl text-md text-white text-left">
        Nehemiah is an all-in-one church management platform designed to help
        you focus on what matters most: serving your community and growing your
        ministry. Built with the unique needs of churches in mind, our software
        streamlines everything from member records and communications to event
        planning, giving, and financial management. With a secure, cloud-based
        platform, your team can access up-to-date information anytime, anywhere
        making it easy to connect, coordinate, and care for every member.
      </p>
      </div>
      
    </section>
  );
}
