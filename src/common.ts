/**
 * The possible colors in Todoist.
 *
 * {@link https://developer.todoist.com/guides/#colors Colors API}
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
