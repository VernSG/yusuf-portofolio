const About = ({ animate }) => {
  return (
    <>
      <section id="about" className="mt-28">
        <div className="grid justify-center" data-aos="fade-up">
          <h1 className="text-white font-poppins text-3xl sm:text-4xl font-bold uppercase ">
            About Me
          </h1>
          <p className="uppercase text-pink-400 text-center tracking-widest">
            Explore Now
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mt-4 items-center">
          <div
            id="aboutCover"
            className="sm:flex sm:justify-center hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="/profile/profile.jpeg"
              alt=""
              className="rounded-t-xl rounded-b-xl w-72 h-56  object-cover "
            />
          </div>
          <p
            className="text-white font-poppins text-sm sm:text-base mt-4"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="700"
          >
            I have proficient coding skills in JS, C++ and TailwindCSS, 
            acquired through four years of dedicated study as a Website/Game Developer.
            My expertise lies in creating dynamic web applications,
            and user-friendly web/game applications, mainly using C++ and JS and keeping up with the latest technologies.
            <br />
            <br />I am actively seeking opportunities that not only align with
            my skill set but also contribute to my continuous personal and
            professional development. My commitment to delivering high-quality,
            innovative solutions makes me an ideal candidate for roles that
            require a skilled and motivated Frontend and Game Developer.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
