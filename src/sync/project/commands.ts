import { Command } from "../common";
import { PickRO } from "../utilities";
import { Project } from "./base";

/**
 * The sync command for [adding a project][doc].
 *
 * [doc]: https://developer.todoist.com/sync/v8/#add-a-project
 *
 * ```ts
 * const command: AddProject = {
 *   args: {
 *     // Required fields:
 *     name: "Project Name",
 *
 *     // Optional fields:
 *     child_order: 123,
 *     color: 40,
 *     is_favorite: 0,
 *     parent_id: 456,
 *   },
 *   uuid: "...",
 *   type: "project_add",
 * };
 * ```
 */
export type AddProject = Command<
  "project_add",
  PickRO<Project, "name", "child_order" | "color" | "is_favorite" | "parent_id">
>;

/**
 * The sync command for [archiving an existing project][doc].
 *
 * [doc]: https://developer.todoist.com/sync/v8/#archive-a-project
 *
 * ```ts
 * const command: ArchiveProject = {
 *   args: {
 *     // Required fields:
 *     id: 123,
 *   },
 *   uuid: "...",
 *   type: "project_archive",
 * };
 * ```
 */
export type ArchiveProject = Command<"project_archive", Pick<Project, "id">>;

/**
 * The sync command for [deleting an existing project][doc].
 *
 * [doc]: https://developer.todoist.com/sync/v8/#delete-a-project
 *
 * ```ts
 * const command: DeleteProject = {
 *   args: {
 *     // Required fields:
 *     id: 123,
 *   },
 *   uuid: "...",
 *   type: "project_delete",
 * };
 * ```
 */
export type DeleteProject = Command<"project_delete", Pick<Project, "id">>;

/**
 * The sync request parameteres for [moving a project][doc] to another parent.
 *
 * [doc]: https://developer.todoist.com/sync/v8/#move-a-project
 *
 * ```ts
 * const command: MoveProject = {
 *   args: {
 *     // Required fields:
 *     id: 123,
 *     parent_id: 456,
 *   },
 *   uuid: "...",
 *   type: "project_move",
 * };
 * ```
 */
export type MoveProject = Command<
  "project_move",
  Pick<Project, "id" | "parent_id">
>;

/**
 * The sync command for [re-ordering projects][doc] in a parent project.
 *
 * [doc]: https://developer.todoist.com/sync/v8/#reorder-projects
 *
 * ```ts
 * const command: ReorderProjects = {
 *   args: {
 *     // Required fields:
 *     child_order: 456,
 *     id: 123,
 *   },
 *   uuid: "...",
 *   type: "project_reorder",
 * };
 */
export type ReorderProjects = Command<
  "project_reorder",
  { projects: Pick<Project, "child_order" | "id">[] }
>;

const test: ReorderProjects = {
  args: {
    projects: [
      { id: 456, child_order: 123 },
      { id: 456, child_order: 123 },
      { id: 456, child_order: 123 },
    ],
  },
  type: "project_reorder",
  uuid: "derp",
};

/**
 * The sync command for [unarchiving an existing project][doc].
 *
 * [doc]: https://developer.todoist.com/sync/v8/#unarchive-a-project
 *
 * ```ts
 * const command: UnarchiveProject = {
 *   args: {
 *     // Required fields:
 *     id: 123,
 *   },
 *   uuid: "...",
 *   type: "project_unarchive",
 * };
 * ```
 */
export type UnarchiveProject = Command<
  "project_unarchive",
  Pick<Project, "id">
>;

/**
 * The sync command for [updating an existing project][doc].
 *
 * [doc]: https://developer.todoist.com/sync/v8/#update-a-project
 *
 * ```ts
 * const command: UpdateProject = {
 *   args: {
 *     // Required fields:
 *     id: 123,
 *
 *     // Optional fields:
 *     collapsed: 0,
 *     color: 40,
 *     is_favorite: 0,
 *     name: "New Project Name",
 *   },
 *   uuid: "...",
 *   type: "project_update",
 * };
 * ```
 */
export type UpdateProject = Command<
  "project_update",
  PickRO<Project, "id", "collapsed" | "color" | "is_favorite" | "name">
>;
