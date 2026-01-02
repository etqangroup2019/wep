import { Link } from "react-router-dom";
import { Facebook, Youtube, MessageCircle, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1CnV7XpzGx/",
    labelKey: "footer.social.facebook",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/channel/UCi27il8T6SbWDVgGPF0Tz5w",
    labelKey: "footer.social.youtube",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/218928198656",
    labelKey: "footer.social.whatsapp",
  },
];

const navLinks = [
  { href: "/", labelKey: "nav.home" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/products", labelKey: "nav.products" },
  { href: "/tools", labelKey: "nav.tools" },
  { href: "/courses", labelKey: "nav.courses" },
];

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl border border-border/50 overflow-hidden shadow-glow">
                <img src={`${import.meta.env.BASE_URL}favicon.jpg`} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground">{t("nav.brand_name")}</h3>
                <p className="text-sm text-muted-foreground">{t("footer.brand_subtitle")}</p>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">{t("footer.quick_links")}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6">{t("footer.contact_us")}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/218928198656"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">+218 92 819 8656</span>
                </a>
              </li>
              <li className="flex items-center gap-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={t(social.labelKey)}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            {t("footer.all_rights_reserved", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};
