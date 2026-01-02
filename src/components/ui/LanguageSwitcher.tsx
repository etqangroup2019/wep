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
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full"
            title={i18n.language === "ar" ? "Switch to English" : "العربية"}
        >
            <Languages className="h-5 w-5" />
            <span className="sr-only">
                {i18n.language === "ar" ? "English" : "العربية"}
            </span>
            <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-primary text-primary-foreground px-1 rounded-sm">
                {i18n.language === "ar" ? "EN" : "AR"}
            </span>
        </Button>
    );
};
