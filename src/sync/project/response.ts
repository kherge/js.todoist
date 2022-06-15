import { Item } from "../item";
import { Note } from "../note";
import { Section } from "../section";
import { Project } from "./base";

/**
 * The sync JSON model for [project data][doc].
 *
 * [doc]: https://developer.todoist.com/sync/v8/#get-project-data
 */
export interface ProjectData {
  /**
   * The uncompleted items.
   */
  items: (Pick<
    Item,
    | "added_by_uid"
    | "assigned_by_uid"
    | "checked"
    | "child_order"
    | "collapsed"
    | "content"
    | "date_added"
    | "date_completed"
    | "description"
    | "due"
    | "id"
    | "in_history"
    | "is_deleted"
    | "labels"
    | "legacy_id"
    | "legacy_parent_id"
    | "legacy_project_id"
    | "parent_id"
    | "priority"
    | "project_id"
    | "responsible_uid"
    | "section_id"
    | "sync_id"
    | "user_id"
  > & {
    /**
     * The number of notes for the item.
     */
    note_count: number;
  })[];

  /**
   * The project information.
   */
  project: Project & {
    /**
     * The archived timestamp of the project.
     */
    archived_timestamp: number;

    /**
     * This field is known of but not documented.
     */
    user_id: number;
  };

  /**
   * The notes, a.k.a comments, for the project.
   */
  project_notes: Note[];

  /**
   * The sections in the project.
   */
  sections: Section[];
}

/**
 * The sync JSON model for [detail project information][doc].
 *
 * [doc]: https://developer.todoist.com/sync/v8/#get-project-info
 */
export interface ProjectInfo {
  /**
   * The project notes (a.k.a. comments).
   */
  notes?: Note[];

  /**
   * The project information.
   */
  project: Project;
}
