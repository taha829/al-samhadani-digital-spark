import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import officeImage from "@/assets/about-office.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${officeImage})` }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Poppins" }}>
            About <span className="text-primary">Al-Hassan</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner for accounting, tax, and digital excellence in Jordan
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "Poppins" }}>
              Who We Are
            </h2>
            <div className="prose prose-lg mx-auto text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Al-Hassan Accounting & Tax Solutions</strong>, located in Shmeisani,
                is a leading provider of comprehensive financial and digital services in Jordan. We combine
                decades of expertise with innovative technology to deliver exceptional results for our clients.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our team of certified professionals specializes in accounting, tax consulting, custom software
                development, and strategic digital marketing. We serve businesses of all sizes, from startups
                to established enterprises, helping them achieve financial clarity and sustainable growth.
              </p>
              <p className="text-lg leading-relaxed">
                With a commitment to accuracy, transparency, and client success, we've built lasting
                relationships based on trust and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Poppins" }}>
                  Mission
                </h3>
                <p className="text-muted-foreground">
                  To help individuals and businesses achieve financial clarity and digital excellence
                  through professional, reliable, and innovative services.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Poppins" }}>
                  Vision
                </h3>
                <p className="text-muted-foreground">
                  To be Jordan's most trusted partner for accounting, tax, and technology-driven
                  business growth, recognized for excellence and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Poppins" }}>
                  Values
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Accuracy</li>
                  <li>• Integrity</li>
                  <li>• Innovation</li>
                  <li>• Commitment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
