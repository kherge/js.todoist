import { State } from "../common";

/**
 * The sync JSON model for a [file attachment][doc].
 *
 * [doc]: https://developer.todoist.com/sync/v8/#file-attachments
 */
export interface Attachment {
  /**
   * The name of the file.
   */
  file_name: string;

  /**
   * The size of the file in bytes.
   */
  file_size: number;

  /**
   * The MIME type of the file.
   */
  file_type: string;

  /**
   * The download URL for the file.
   */
  file_url: string;

  /**
   * The resource type.
   */
  resource_type: string;

  /**
   * The upload state.
   */
  upload_state: "completed" | "pending";
}

/**
 * The sync JSON model for an image attachment.
 */
export interface ImageAttachment extends Attachment {
  /**
   * The image URL.
   */
  image: string;

  /**
   * The image height.
   */
  image_height: number;

  /**
   * The image width.
   */
  image_width: number;

  /**
   * The resource type.
   */
  resource_type: "image";
}

/**
 * The sync JSON model for a [note (a.k.a comment)][doc].
 *
 * [doc]: https://developer.todoist.com/sync/v8/#item-notes
 */
export interface Note {
  /**
   * The Markdown formatted content of the note.
   */
  content: string;

  /**
   * The file attached to the note.
   */
  file_attachment: Attachment | ImageAttachment | null;

  /**
   * The note ID.
   */
  id: number;

  /**
   * The deleted state of the note.
   */
  is_deleted: State;

  /**
   * The legacy note ID.
   */
  legacy_id?: number;

  /**
   * The legacy project ID.
   */
  legacy_project_id?: number;

  /**
   * The ISO 8601 timestamp of when the note was posted.
   */
  posted: string;

  /**
   * The user ID of the user that posted the note.
   */
  posted_uid: number;

  /**
   * The project the note is a part of.
   */
  project_id: number;

  /**
   * The emoji reactions to the note.
   */
  reactions: Reactions | null;

  /**
   * The list of user IDs to notify.
   */
  uids_to_notify: null | number[];
}

/**
 * The sync JSON model for an item note.
 */
export interface ItemNote extends Note {
  /**
   * The item the note is a part of.
   */
  item_id: number;

  /**
   * The legacy item ID.
   */
  legacy_item_id?: number;
}

/**
 * The emoji reactions to a note, where the key is the emoji and the value is a list of user IDs.
 */
export type Reactions = Record<string, number[]>;
