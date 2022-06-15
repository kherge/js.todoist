import { Language, State } from "../common";

/**
 * The sync JSON model for a due date.
 */
export interface Due {
  /**
   * The date, and optionally time, (RFC 3339) the item is currently due.
   */
  date: string;

  /**
   * The flag that indicates the due date is recurring.
   */
  is_recurring: boolean;

  /**
   * The language that should be used to parse the string due date.
   */
  lang: Language;

  /**
   * The human-readable representation of the due date.
   */
  string: string;

  /**
   * The field does not appear to be used.
   */
  timezone: null;
}

/**
 * The sync JSON model for an [item (a.k.a task)][doc].
 *
 * [doc]: https://developer.todoist.com/sync/v8/#items
 */
export interface Item {
  /**
   * The user ID of the person who created the item.
   */
  added_by_uid: number;

  /**
   * The user ID of the person who assigned the item.
   */
  assigned_by_uid: null | number;

  /**
   * The checked state of the item.
   */
  checked: State;

  /**
   * The order of the item in the parent.
   */
  child_order: number;

  /**
   * The collapsed state of the item.
   */
  collapsed: State;

  /**
   * The title of the item.
   */
  content: string;

  /**
   * The date and time the item was created.
   */
  date_added: string;

  /**
   * The date and time the item was completed.
   */
  date_completed: null | string;

  /**
   * The order of the item in the "Today" or "Next 7 days" view.
   */
  day_order: number;

  /**
   * The description of the item.
   */
  description: string;

  /**
   * The due date of the item.
   */
  due: Due | null;

  /**
   * The flag that indicates if the item has notes that could be retrieved.
   */
  has_more_notes: boolean;

  /**
   * The item ID.
   */
  id: number;

  /**
   * The deleted state of the item.
   */
  is_deleted: State;

  /**
   * The "should be moved to history" state of the item.
   */
  in_history: State;

  /**
   * The label IDs for the item.
   */
  labels: number[];

  /**
   * The legacy item ID.
   */
  legacy_id?: number;

  /**
   * The legacy parent item ID.
   */
  legacy_parent_id?: number;

  /**
   * The legacy project ID.
   */
  legacy_project_id?: number;

  /**
   * The item ID of the parent item.
   */
  parent_id: null | number;

  /**
   * The priority of the item.
   */
  priority: Priority;

  /**
   * The project ID of the parent project.
   */
  project_id: number;

  /**
   * The user ID of the person responsible for completing the item.
   */
  responsible_uid: null | number;

  /**
   * The section ID of the parent section.
   */
  section_id: null | number;

  /**
   * The sync ID if the item is shared.
   */
  sync_id: null | string;

  /**
   * The user ID of the owner of the item.
   */
  user_id: number;
}

/**
 * The possible priorities for an item.
 */
export type Priority = 1 | 2 | 3 | 4;
