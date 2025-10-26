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
              Passionate Web Developer & Tech Innovater
            </h3>

            {/* write about experience */}
            <p className="text-muted-foreground">
              Currently, I&apos;m contributing to UGA&apos;s Small Satellite
              Research Lab, where I help design a secure over-the-air updater
              and scheduler component for MEMESat-1. I enjoy tackling complex
              problems, optimizing workflows, and exploring how AI can enhance
              user productivity.
            </p>

            {/* write about passion */}
            <p className="text-muted-foreground">
              When I&apos;m not coding, you&apos;ll probably find me experimenting with
              new projects, studying Japanese, or brainstorming ways to make
              tech more accessible and impactful — and if not that, I&apos;m definitely on the basketball court.
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
                  <h4 className="font-semibold text-lg">
                    {" "}
                    CubeSat Development with SSRL
                  </h4>
                  <p className="text-muted-foreground">
                    Colloborated on MEMESat-1, a student-built satellite
                    expanding affordable access to space.
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
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Athens-Clarke County Police Cadet{" "}
                  </h4>
                  <p className="text-muted-foreground">
                    Collaborated with the ACCPD's Technology Division to enhance
                    public safety.
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
