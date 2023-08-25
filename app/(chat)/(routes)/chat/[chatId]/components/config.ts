import { CharacterType, MessageType } from '@/lib/CharacterType'

// VOICEVOXのキャラクター
// https://voicevox.hiroshiba.jp/
export const Characters: CharacterType[] = [
  { value: '3', label: 'ずんだもん', word: 'ずんだもんです' },
  { value: '2', label: '四国めたん', word: 'しこくめたんです' },
  { value: '8', label: '春日部つむぎ', word: 'かすかべつむぎです' },
  { value: '10', label: '雨晴はう', word: 'あめはれはうです' },
  { value: '9', label: '波音リツ', word: 'なみねりつです' },
  { value: '11', label: '玄野武宏', word: 'くろのたけひろです' },
  { value: '12', label: '白上虎太郎', word: 'しらかみこたろうです' },
  { value: '13', label: '青山龍星', word: 'あおやまりゅうせいです' },
  { value: '14', label: '冥鳴ひまり', word: 'めいめいひまりです' },
  { value: '16', label: '九州そら', word: 'きゅうしゅうそらです' },
  { value: '20', label: 'もち子さん', word: 'もちのきょうこです' },
  { value: '21', label: '剣崎雌雄', word: 'けんざきめすおです' },
  { value: '23', label: 'WhiteCUL', word: 'ほわいとかるです' },
  { value: '27', label: '後鬼', word: 'ごきです' },
  { value: '29', label: 'No.7', word: 'ナンバーセブンです' },
  { value: '42', label: 'ちび式じい', word: 'ちびしきじいです' },
  { value: '43', label: '櫻歌ミコ', word: 'おうかみこです' },
  { value: '46', label: '小夜/SAYO', word: 'さよです' },
  { value: '47', label: 'ナースロボ＿タイプＴ', word: 'なーすろぼ たいぷてぃーです' },
  { value: '51', label: '聖騎士 紅桜', word: 'ほーりーないと べにざくらです' },
  { value: '52', label: '雀松朱司', word: 'わかまつあかしです' },
  { value: '53', label: '麒ヶ島宗麟', word: 'きがしまそうりんです' },
  { value: '54', label: '春歌ナナ', word: 'はるかななです' },
  { value: '55', label: '猫使アル', word: 'ねこつかあるです' },
  { value: '58', label: '猫使ビィ', word: 'ねこつかびぃです' },
]

// テスト用メッセージリスト
export const TestMessages: MessageType[] = Array.from({ length: 10 }, () => [
  { type: 'question', text: 'テスト質問' },
  { type: 'answer', text: 'テスト回答1\nテスト回答2\nテスト回答3' },
]).flat()