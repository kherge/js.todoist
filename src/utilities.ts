/**
 * A utility type for picking required and optional fields from another type.
 *
 * ```
 * interface Original {
 *   alpha: number;
 *   beta: string;
 *   gamma: boolean;
 * }
 * ```
 *
 * With the above type, we can pick out the "alpha" field as required while also making the "beta"
 * field an optional type. The resulting type will only require the alpha field, allow the beta
 * fields to be specified, and does not recognize gamma as a valid field.
 *
 * ```
 * type Picked = PickRO<Original, "alpha", "beta">;
 * ```
 */
export type PickRO<T, R extends keyof T, O extends keyof T> = Pick<T, R> &
  Partial<Pick<T, O>>;
