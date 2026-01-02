import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Puzzle, BookOpen, CheckSquare, ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Tools = () => {
  const { t } = useTranslation();

  const tools = [
    {
      id: "kh-tools",
      title: t("tools.items.kh_tools.title"),
      description: t("tools.items.kh_tools.desc"),
      longDescription: t("tools.items.kh_tools.long_desc"),
      icon: Puzzle,
      category: t("tools.categories.blender"),
      link: "/tools/kh-tools",
    },
    {
      id: "quran-app",
      title: t("tools.items.quran_app.title"),
      description: t("tools.items.quran_app.desc"),
      longDescription: t("tools.items.quran_app.long_desc"),
      icon: BookOpen,
      category: t("tools.categories.mobile_app"),
      link: "/tools/quran-app",
    },
    {
      id: "task-manager",
      title: t("tools.items.task_manager.title"),
      description: t("tools.items.task_manager.desc"),
      longDescription: t("tools.items.task_manager.long_desc"),
      icon: CheckSquare,
      category: t("tools.categories.mobile_app"),
      link: "/tools/task-manager",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="animate-fade-up inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {t("tools.preview.tag")}
              </span>
              <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t("tools.page.hero_title")}
              </h1>
              <p className="animate-fade-up delay-200 text-lg text-muted-foreground">
                {t("tools.page.hero_desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div
                  key={tool.id}
                  className="animate-fade-up group p-8 rounded-2xl bg-card border border-border hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-6">
                    {tool.category}
                  </span>

                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {tool.longDescription}
                  </p>

                  <Button variant="outline" className="w-full" asChild>
                    <Link to={tool.link}>
                      <Download className="w-4 h-4" />
                      {t("tools.page.cta_download")}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
