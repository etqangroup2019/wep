import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Wrench, Shield, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ProductDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const productsData = {
    "engineer-system": {
      title: t("products.items.engineer_system.title"),
      description: t("products.items.engineer_system.desc"),
      longDescription: t("products.items.engineer_system.long_desc_detail"),
      icon: Wrench,
      features: [
        t("products.items.engineer_system.features_detail.0"),
        t("products.items.engineer_system.features_detail.1"),
        t("products.items.engineer_system.features_detail.2"),
        t("products.items.engineer_system.features_detail.3"),
        t("products.items.engineer_system.features_detail.4"),
        t("products.items.engineer_system.features_detail.5"),
        t("products.items.engineer_system.features_detail.6"),
        t("products.items.engineer_system.features_detail.7"),
      ],
    },
    "file-encryption": {
      title: t("products.items.file_encryption.title"),
      description: t("products.items.file_encryption.desc"),
      longDescription: t("products.items.file_encryption.long_desc_detail"),
      icon: Shield,
      features: [
        t("products.items.file_encryption.features_detail.0"),
        t("products.items.file_encryption.features_detail.1"),
        t("products.items.file_encryption.features_detail.2"),
        t("products.items.file_encryption.features_detail.3"),
        t("products.items.file_encryption.features_detail.4"),
        t("products.items.file_encryption.features_detail.5"),
        t("products.items.file_encryption.features_detail.6"),
        t("products.items.file_encryption.features_detail.7"),
      ],
    },
  };

  const product = productsData[id as keyof typeof productsData];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">{t("common.product_not_found")}</h1>
            <Button asChild>
              <Link to="/products">{t("common.back_to_products")}</Link>
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
            <Link to="/products" className="hover:text-foreground">{t("products.preview.tag")}</Link>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            <span className="text-foreground">{product.title}</span>
          </nav>
        </div>

        {/* Product Hero */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-up flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <product.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    {product.title}
                  </h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    {product.description}
                  </p>
                </div>
              </div>

              <p className="animate-fade-up delay-100 text-lg text-muted-foreground leading-relaxed mb-12">
                {product.longDescription}
              </p>

              <div className="animate-fade-up delay-200 flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="https://wa.me/218928198656" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 rtl:pl-1" />
                    {t("common.order_product")}
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

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">{t("common.features")}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
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

export default ProductDetail;
