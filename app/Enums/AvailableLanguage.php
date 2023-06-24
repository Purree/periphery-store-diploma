<?php

namespace App\Enums;

enum AvailableLanguage: string implements ArrayableEnumInterface
{
    use ArrayableEnumTrait;
    use SearchableEnumTrait;

    case English = 'en_US';
    case Russian = 'ru_RU';

    public static function getAbbreviatedLocales(): array
    {
        return array_map(
            static fn (string $locale) => str_contains($locale, "_") ? mb_strstr($locale, "_", true) : $locale,
            self::toArray()
        );
    }

    public static function getFullLocaleFromAbbreviated(string $locale): self
    {
        return self::searchByName(array_search($locale, self::getAbbreviatedLocales(), true));
    }
}
