import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Play, Clock, Users, ArrowRight, Check, MessageCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CourseDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const coursesData = {
    blender: {
      title: t("courses.blender.title"),
      description: t("courses.blender.desc"),
      longDescription: t("courses.blender.long_desc"),
      duration: t("courses.blender.stats.hours"),
      students: t("courses.blender.stats.students"),
      type: t("courses.blender.stats.type_detail"),
      modules: t("courses.blender.modules_detail", { returnObjects: true }) as { title: string; lessons: string[] }[],
      features: [
        t("courses.blender.features.0"),
        t("courses.blender.features.1"),
        t("courses.blender.features.2"),
        t("courses.blender.features.3"),
        t("courses.blender.features.4"),
        t("courses.blender.features.5"),
      ],
    },
  };

  const course = coursesData[id as keyof typeof coursesData];

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">{t("common.course_not_found")}</h1>
            <Button asChild>
              <Link to="/courses">{t("common.back_to_courses")}</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">{t("nav.home")}</Link>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            <Link to="/courses" className="hover:text-foreground">{t("courses.preview.tag")}</Link>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            <span className="text-foreground">{course.title}</span>
          </nav>
        </div>

        {/* Course Hero */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <span className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                {t("courses.page.main_course_badge")}
              </span>

              <h1 className="animate-fade-up delay-100 text-3xl md:text-4xl font-bold text-foreground mb-6">
                {course.title}
              </h1>

              <p className="animate-fade-up delay-200 text-lg text-muted-foreground leading-relaxed mb-8">
                {course.longDescription}
              </p>

              <div className="animate-fade-up delay-300 flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Play className="w-5 h-5 text-primary" />
                  <span>{course.type}</span>
                </div>
              </div>

              <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="https://wa.me/218928198656" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 rtl:pl-1" />
                    {t("common.register_course")}
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/218928198656" target="_blank" rel="noopener noreferrer">
                    {t("common.inquire_price")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">{t("common.course_content")}</h2>
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <div
                    key={index}
                    className="animate-fade-up rounded-2xl bg-card border border-border overflow-hidden"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="p-6 bg-muted/50">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{module.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {module.lessons.map((lesson, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                            <Play className="w-4 h-4 text-primary shrink-0 rtl:rotate-180" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">{t("common.what_you_get")}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <div
                    key={index}
                    className="animate-fade-up flex items-center gap-4 p-5 rounded-xl bg-card border border-border"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
