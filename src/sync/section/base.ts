/**
 * The sync JSON model for a section.
 */
export interface Section {
  /**
   * The collapsed state of the section.
   */
  collapsed: boolean;

  /**
   * The date the section was added.
   */
  date_added: string;

  /**
   * The date the section was archived.
   */
  date_archived: null | string;

  /**
   * The section ID.
   */
  id: number;

  /**
   * The archived state of the section.
   */
  is_archived: boolean;

  /**
   * The deleted state of the section.
   */
  is_deleted: boolean;

  /**
   * The legacy project ID of the parent project.
   */
  legacy_project_id?: number;

  /**
   * The name of the section.
   */
  name: string;

  /**
   * The project ID of the parent project.
   */
  project_id: number;

  /**
   * The order of the section in the project.
   */
  section_order: number;

  /**
   * The sync ID if in a shared project.
   */
  sync_id: null | string;

  /**
   * This field is known of but not documented.
   */
  user_id: number;
}
