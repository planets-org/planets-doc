---
sidebar_label: "APIエラーレスポンス一覧"
sidebar_position: 2
---
## 1. PLAT410で発生するエラーレスポンス一覧
### 共通項目
#### NotNull.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | NotNull.message | 
| code | value　|
| details.text | {0}が設定されていません。 |
| パラメータ | {0} : 物理項目名 |

#### NotBlank.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | NotBlank.message | 
| code | value　|
| details.text | {0}が設定されていません。 |
| パラメータ | {0} : 物理項目名 |

#### NotBlank.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | NotEmpty.message | 
| code | value　|
| details.text | {0}が設定されていません。 |
| パラメータ | {0} : 物理項目名 |

#### Pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | Pattern.message | 
| code | value　|
| details.text | {0}のフォーマットが想定されていません。 |
| パラメータ | {0} : 物理項目名 |

#### Length.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | Length.message | 
| code | value　|
| details.text | {0}の文字数が制限外です。 |
| パラメータ | {0} : 物理項目名 |

#### DateFormat.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | DateFormat.message | 
| code | value　|
| details.text | {0}のフォーマットが想定されていません。 |
| パラメータ | {0} : 物理項目名 |

#### EnumValue.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | EnumValue.message | 
| code | value　|
| details.text | {0}が想定されている値ではありません。 |
| パラメータ | {0} : 物理項目名 |


#### name.length.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | name.length.message | 
| code | value　|
| details.text | 名前の文字数が超過しています。 |

#### name.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | name.pattern.message | 
| code | value　|
| details.text | 名前のフォーマットが想定されていません。 |

#### address.length.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | address.length.message | 
| code | value　|
| details.text | 住所の文字数が超過しています。 |


#### address.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | address.pattern.message | 
| code | value　|
| details.text | 住所のフォーマットが想定されていません。 |

#### telecm.length.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | telecm.length.message | 
| code | value　|
| details.text | 電話番号のの文字数が超過しています。 |

#### telecm.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | telecm.pattern.message | 
| code | value　|
| details.text | 電話番号のフォーマットが想定されていません。 |

#### gender.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | gender.pattern.message | 
| code | value　|
| details.text | 性別の選択が想定値ではありません。 |

#### birthdate.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | birthdate.pattern.message | 
| code | value　|
| details.text | 生年月日のフォーマットが想定されていません。 |

#### birthdate.DateFormat.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | birthdate.DateFormat.message | 
| code | value　|
| details.text | 生年月日の日付は存在しません。 |

#### patient_id.pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | patient_id.pattern.message | 
| code | value　|
| details.text | 患者IDのフォーマットが想定されていません。 |

### 個別項目
#### PRV_ROL_002: 【登録】権限の要求（承認要求）（医療機関用）
##### PermissionApproval.isCheckOrganaizationOrPersonalId
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | PermissionApproval.isCheckOrganaizationOrPersonalId | 
| code | value　|
| details.text | 許可可能者IDが設定されていません。 |

##### PermissionApproval.isCheckOrganaization
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | PermissionApproval.isCheckOrganaization | 
| code | value　|
| details.text | 許可可能者IDは医療機関を指定する場合、個人の指定はできません。 |

##### PermissionApproval.isCheckDepartmentId
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | PermissionApproval.isCheckDepartmentId | 
| code | value　|
| details.text | 許可可能者IDは診療科を指定する場合、医療機関の指定も必須です。 |

##### PermissionApproval.isCheckPersonalId
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | PermissionApproval.isCheckPersonalId | 
| code | value　|
| details.text | 許可可能者IDは個人を指定されている場合、医療機関・診療科の指定はできません。 |

##### providers.permission.approval.id.Pattern.message
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | providers.permission.approval.id.Pattern.message | 
| code | value　|
| details.text | PathParameterのpermissionApprovalIdの値が想定されていません。 |

## 2. PLAT420で発生するエラーレスポンス一覧
### permission.create.err001
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | permission.create.err001 | 
| code | value　|
| details.text | 許可可能IDに登録されていない医療機関IDが設定されています。 |

### permission.create.err002
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | permission.create.err002 | 
| code | value　|
| details.text | 許可可能IDに登録されていない診療科IDが設定されています。 |

### permission.create.err003
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | permission.create.err003 | 
| code | value　|
| details.text | 許可可能IDの診療科IDが医療機関に存在しません。 |

### permission.create.err004
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | permission.create.err004 | 
| code | value　|
| details.text | 許可可能IDは登録されていません。 |

### permission.create.err101
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | permission.create.err101 | 
| code | value　|
| details.text | 許可者IDがPLAT共通ID・スタッフIDに存在しません。 |

### permission.create.err102
| 項目 | 設定値 | 
| :- | :- |
| メッセージキー | permission.create.err102 | 
| code | value　|
| details.text | 許可者IDが医療機関IDに存在しません。 |

