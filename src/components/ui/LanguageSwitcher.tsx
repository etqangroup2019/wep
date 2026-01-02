import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "ar" ? "en" : "ar";
        i18n.changeLanguage(newLang);
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="h-9 w-9 p-0 rounded-full hover:bg-muted relative group transition-all duration-300"
            title={i18n.language === "ar" ? "Switch to English" : "العربية"}
        >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                {i18n.language === "ar" ? "EN" : "AR"}
            </span>
            <span className="sr-only">
                {i18n.language === "ar" ? "English" : "العربية"}
            </span>
        </Button>
    );
};
