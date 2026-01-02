import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Puzzle, BookOpen, CheckSquare, ArrowRight, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ToolDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const toolsData = {
    "kh-tools": {
      title: t("tools.items.kh_tools.title"),
      description: t("tools.items.kh_tools.desc"),
      longDescription: t("tools.items.kh_tools.long_desc_detail"),
      icon: Puzzle,
      features: [
        t("tools.items.kh_tools.features.0"),
        t("tools.items.kh_tools.features.1"),
        t("tools.items.kh_tools.features.2"),
        t("tools.items.kh_tools.features.3"),
        t("tools.items.kh_tools.features.4"),
        t("tools.items.kh_tools.features.5"),
      ],
    },
    "quran-app": {
      title: t("tools.items.quran_app.title"),
      description: t("tools.items.quran_app.desc"),
      longDescription: t("tools.items.quran_app.long_desc_detail"),
      icon: BookOpen,
      features: [
        t("tools.items.quran_app.features.0"),
        t("tools.items.quran_app.features.1"),
        t("tools.items.quran_app.features.2"),
        t("tools.items.quran_app.features.3"),
        t("tools.items.quran_app.features.4"),
        t("tools.items.quran_app.features.5"),
      ],
    },
    "task-manager": {
      title: t("tools.items.task_manager.title"),
      description: t("tools.items.task_manager.desc"),
      longDescription: t("tools.items.task_manager.long_desc_detail"),
      icon: CheckSquare,
      features: [
        t("tools.items.task_manager.features.0"),
        t("tools.items.task_manager.features.1"),
        t("tools.items.task_manager.features.2"),
        t("tools.items.task_manager.features.3"),
        t("tools.items.task_manager.features.4"),
        t("tools.items.task_manager.features.5"),
      ],
    },
  };

  const tool = toolsData[id as keyof typeof toolsData];

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">{t("common.tool_not_found")}</h1>
            <Button asChild>
              <Link to="/tools">{t("common.back_to_tools")}</Link>
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
            <Link to="/tools" className="hover:text-foreground">{t("tools.preview.tag")}</Link>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            <span className="text-foreground">{tool.title}</span>
          </nav>
        </div>

        {/* Tool Hero */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-up flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <tool.icon className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-2">
                    {t("common.free")}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    {tool.title}
                  </h1>
                </div>
              </div>

              <p className="animate-fade-up delay-100 text-lg text-muted-foreground leading-relaxed mb-12">
                {tool.longDescription}
              </p>

              <Button variant="hero" size="lg" className="animate-fade-up delay-200">
                <Download className="w-5 h-5 rtl:ml-2 ltr:mr-2" />
                {t("common.free_download")}
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">{t("common.features")}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tool.features.map((feature, index) => (
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

export default ToolDetail;
