import { Briefcase, Code, Rocket } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* Left Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & tech creator
            </h3>

            {/* write about experience */}
            <p className="text-muted-foreground">
              I am a curious and driven person who loves diving into new
              challenges headfirst. I balance a sharp intellect with a playful
              sense of humor, which makes me both a reliable teammate and an
              engaging conversationalist. Whether I am exploring tech projects,
              getting lost in a good book, or trying out new hobbies, I approach
              everything with energy and creativity. I like to face obstacles
              head-on and find unique ways to turn them into opportunities.
            </p>

            {/* write about passion */}
            <p className="text-muted-foreground">
              I am passionate about technology and the way it can solve
              real-world problems, whether that is through coding, building
              projects, or exploring new software tools. I love learning and
              constantly challenging myself to grow, especially in areas like
              computer science, problem-solving, and creative thinking. Beyond
              tech, I enjoy diving into books, exploring new ideas, and
              discovering hobbies that let me express myself and think
              differently. For me, pursuing my passions is not just about
              skills—it is about curiosity, growth, and finding ways to make an
              impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In touch
              </a>

              <a
                href="/assets/Theodore_Willingham_Resume.pdf"
                download="Theodore_Willingham_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>{" "}
          {/* left Section End */}
          {/* Right Section */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> CubeSat Development </h4>
                  <p className="text-muted-foreground">
                    Colloborated on Meme-sat with SSRL to launch a sattelite into space
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Police Cadet </h4>
                  <p className="text-muted-foreground">
                    Worked with the technolofy devision of Athens Clarke County Police
                    to increase public safety
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section End */}
        </div>
      </div>
    </section>
  );
};
