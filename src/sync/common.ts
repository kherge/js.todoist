/**
 * The possible colors in Todoist.
 *
 * {@link https://developer.todoist.com/guides/#colors Colors}
 */
export enum Color {
  /**
   * #b8256f
   */
  BerryRed = 30,

  /**
   * #db4035
   */
  Red,

  /**
   * #ff9933
   */
  Orange,

  /**
   * #fad000
   */
  Yellow,

  /**
   * #afb83b
   */
  OliveGreen,

  /**
   * #7ecc49
   */
  LimeGreen,

  /**
   * #299438
   */
  Green,

  /**
   * #6accbc
   */
  MintGreen,

  /**
   * #158fad
   */
  Teal,

  /**
   * #14aaf5
   */
  SkyBlue,

  /**
   * #96c3eb
   */
  LightBlue,

  /**
   * #4073ff
   */
  Blue,

  /**
   * #884dff
   */
  Grape,

  /**
   * #af38eb
   */
  Violet,

  /**
   * #eb96eb
   */
  Lavender,

  /**
   * #e05194
   */
  Magenta,

  /**
   * #ff8d85
   */
  Salmon,

  /**
   * #808080
   */
  Charcoal,

  /**
   * #b8b8b8
   */
  Grey,

  /**
   * #ccac93
   */
  Taupe,
}

/**
 * The sync command and its arguments.
 *
 * - {@link https://developer.todoist.com/sync/v8/#write-resources Sync / Write resources}
 */
export interface Command<C extends string, A> {
  /**
   * The arguments for the command.
   */
  args: A;

  /**
   * The temporary resource ID.
   */
  temp_id?: string;

  /**
   * The type of the command.
   */
  type: C;

  /**
   * The unique ID for the command.
   */
  uuid: string;
}

/**
 * The languages (ISO 639-1) recognized by Todoist.
 */
export enum Language {
  Chinese = "zh",
  Danish = "da",
  Dutch = "nl",
  English = "en",
  French = "fr",
  German = "de",
  Italian = "it",
  Japanese = "ja",
  Korean = "ko",
  Polish = "pl",
  Portuguese = "pt",
  Russian = "ru",
  Spanish = "es",
  Swedish = "sv",
}

/**
 * The possible state values.
 */
export enum State {
  /**
   * The negative state.
   */
  No = 0,

  /**
   * The affirmative state.
   */
  Yes = 1,
}
