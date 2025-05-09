/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * A tag type.
 */
export interface TagTypeSchema {
    /**
     * The hexadecimal color code for the tag type.
     * @nullable
     * @pattern ^#[0-9A-Fa-f]{6}$
     */
    color?: string | null;
    /** The description of the tag type. */
    description?: string;
    /**
     * The icon of the tag type.
     * @nullable
     */
    icon?: string | null;
    /** The name of the tag type. */
    name: string;
}
