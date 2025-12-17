import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center">
                <span className="text-neutral-950 font-bold text-[10px] tracking-wide">AFA</span>
              </div>
              <span className="text-white font-semibold text-lg">Ai for all</span>
            </div>
            <p className="text-neutral-500 max-w-sm">
              Агентство по внедрению ИИ в бизнес. Разработка AI-ассистентов и корпоративное обучение.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-neutral-500 hover:text-neutral-300 transition-colors">
                  Разработка ИИ-ассистентов
                </a>
              </li>
              <li>
                <a href="#education" className="text-neutral-500 hover:text-neutral-300 transition-colors">
                  Мастер-классы
                </a>
              </li>
              <li>
                <a href="#cases" className="text-neutral-500 hover:text-neutral-300 transition-colors">
                  Кейсы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-neutral-500">
                <a href="mailto:ai-for-all@yandex.ru" className="hover:text-white transition-colors">
                  ai-for-all@yandex.ru
                </a>
              </li>
              <li className="text-neutral-500">
                <a href="tel:+79850614040" className="hover:text-white transition-colors">
                  +7 985 061-40-40
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-neutral-800 pt-8">
          <div className="text-neutral-500 text-sm leading-relaxed max-w-3xl">
            ИП Аникина Мария Олеговна · ИНН 211277870304 · ОГРН 32521000002990
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-neutral-500 text-sm">© 2025 Ai for all. Все права защищены.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm">
                Политика конфиденциальности
              </Link>
              <Link href="/agreement" className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
