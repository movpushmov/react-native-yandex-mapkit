import { NativeModules } from 'react-native';

interface SetupModule {
  setup(apiKey: string, locale: string | null): void;
}

const Module: SetupModule = NativeModules.YandexMapkitSetupModule;

/**
 * Метод инициализации яндекс карт. Обязателен для вызова перед отрисовкой карт.
 * Вызвать можно всего один раз, изменить api key / locale после вызова метода
 * уже не получится.
 * @param {string} apiKey - API ключ для яндекс карт
 * @param {string} locale - Текущий язык карты (по дефолту язык системы)
 */
export function setup(apiKey: string, locale?: string) {
  return Module.setup(apiKey, locale ?? null);
}
