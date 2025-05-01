import { MultiLangBox, LangButton } from "./styled";
import { useRouter, usePathname } from "../../i18n/navigation";
import { useParams } from "next/navigation";
import { routing } from "@/i18n/routing";
export default function MultiLangButton() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onChangeLocale(nextLocale) {
    router.replace({ pathname, params }, { locale: nextLocale });
  }

  return (
    <MultiLangBox>
      <LangButton onClick={() => onChangeLocale(routing.locales[1])}>
        AM
      </LangButton>
      <LangButton onClick={() => onChangeLocale(routing.locales[0])}>
        EN
      </LangButton>
    </MultiLangBox>
  );
}
