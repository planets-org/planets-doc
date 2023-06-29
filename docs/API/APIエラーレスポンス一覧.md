---
sidebar_label: "APIエラーレスポンス一覧"
sidebar_position: 2
---

## 1. バリデーションチェックで発生するエラーレスポンス一覧
### 共通項目
#### NotNull.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | NotNull.message | 
| details.text | {0}が設定されていません。 |
| パラメータ | {0} : 物理項目名 |

#### NotBlank.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | NotBlank.message | 
| details.text | {0}が設定されていません。 |
| パラメータ | {0} : 物理項目名 |

#### NotEmpty.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | NotEmpty.message | 
| details.text | {0}が設定されていません。 |
| パラメータ | {0} : 物理項目名 |

#### Pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | Pattern.message | 
| details.text | {0}のフォーマットが想定されていません。 |
| パラメータ | {0} : 物理項目名 |

#### Length.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | Length.message | 
| details.text | {0}の文字数が制限外です。 |
| パラメータ | {0} : 物理項目名 |

#### DateFormat.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | DateFormat.message | 
| details.text | {0}のフォーマットが想定されていません。 |
| パラメータ | {0} : 物理項目名 |

#### EnumValue.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | EnumValue.message | 
| details.text | {0}が想定されている値ではありません。 |
| パラメータ | {0} : 物理項目名 |


#### name.length.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | name.length.message | 
| details.text | 名前の文字数が超過しています。 |

#### name.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | name.pattern.message | 
| details.text | 名前のフォーマットが想定されていません。 |

#### address.length.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | address.length.message | 
| details.text | 住所の文字数が超過しています。 |


#### address.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | address.pattern.message | 
| details.text | 住所のフォーマットが想定されていません。 |

#### telecm.length.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | telecm.length.message | 
| details.text | 電話番号のの文字数が超過しています。 |

#### telecm.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | telecm.pattern.message | 
| details.text | 電話番号のフォーマットが想定されていません。 |

#### gender.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | gender.pattern.message | 
| details.text | 性別の選択が想定値ではありません。 |

#### birthdate.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | birthdate.pattern.message | 
| details.text | 生年月日のフォーマットが想定されていません。 |

#### birthdate.DateFormat.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | birthdate.DateFormat.message | 
| details.text | 生年月日の日付は存在しません。 |

#### patient_id.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | patient_id.pattern.message | 
| details.text | 患者IDのフォーマットが想定されていません。 |

#### patient_id.length.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | patient_id.length.message | 
| details.text | 患者IDの文字数が超過しています。 |

#### plat_id.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | plat_id.pattern.message | 
| details.text | PLATIDのフォーマットが想定されていません。 |

#### plat_id.length.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | plat_id.length.message | 
| details.text | PLATIDの文字数が超過しています。 |

#### consultation_day_from.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | consultation_day_from.pattern.message | 
| details.text | 検索開始日のフォーマットが想定されていません。 |

#### consultation_day_from.DateFormat.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | consultation_day_from.DateFormat.message | 
| details.text | 検索開始日の日付は存在しません。 |

#### consultation_day_to.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | consultation_day_to.pattern.message | 
| details.text | 検索終了日のフォーマットが想定されていません。 |

#### consultation_day_to.DateFormat.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | consultation_day_to.DateFormat.message | 
| details.text | 検索終了日の日付は存在しません。 |

#### title.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | title.pattern.message | 
| details.text | タイトルのフォーマットが想定されていません。 |

#### title.length.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | title.length.message | 
| details.text | タイトルの文字数が超過しています。 |

#### location.EnumValue.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | location.EnumValue.message | 
| details.text | 参照先が想定されている値ではありません。 |
