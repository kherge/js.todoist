import { Color, State } from "../common";

/**
 * The sync JSON model for a project.
 *
 * - {@link https://developer.todoist.com/sync/v8/#projects Projects}
 */
export interface Project {
  /**
   * The order of the project in the parent.
   */
  child_order: number;

  /**
   * The collapsed state.
   */
  collapsed: State;

  /**
   * The project color.
   */
  color: Color;

  /**
   * The project ID.
   */
  id: number;

  /**
   * The state that indicates the project is an inbox.
   */
  inbox_project: boolean;

  /**
   * The archived state.
   */
  is_archived: State;

  /**
   * The deleted state.
   */
  is_deleted: State;

  /**
   * The favored state.
   */
  is_favorite: State;

  /**
   * The project legacy ID.
   */
  legacy_id?: number;

  /**
   * The legacy ID of the parent project.
   */
  legacy_parent_id?: number;

  /**
   * The name of the project.
   */
  name: string;

  /**
   * The ID of the parent project.
   */
  parent_id: null | number;

  /**
   * The state that indicates if the project is shared.
   */
  shared: boolean;

  /**
   * The sync ID if the project is shared.
   */
  sync_id: null | number;

  /**
   * The state that indicates the project is a team inbox.
   */
  team_inbox?: boolean;
}
