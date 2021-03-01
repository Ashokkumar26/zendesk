export interface outputSchema {
  /**
   * @examples [12]
   */
  ticket_id: number;
  /**
   * @examples ["New Ticket"]
   */
  subject: string;
  /**
   * @examples ["This is the first ticket"]
   */
  description: string;
  /**
   * @examples ["open"]
   */
  status: string;
  /**
   * @examples ["incident"]
   */
  type: string;
  /**
   * @examples ["normal"]
   */
  priority: string;
  /**
   * @examples [123456]
   */
  id: number;
  /**
   * @examples ["2021-02-26T04:39:47Z"]
   */
  created_at: string;
  /**
   * @examples [123456]
   */
  author_id: number;
  events: {
    /**
     * @examples [123456]
     */
    id: number;
    /**
     * @examples ["Comment"]
     */
    type: string;
    /**
     * @examples [123456]
     */
    author_id: number;
    /**
     * @examples ["The smoke is very colorful"]
     */
    body: string;
    /**
     * @examples [true]
     */
    public: boolean;
    /**
     * @examples [123456]
     */
    audit_id: number;
  }[];
  /**
   * @examples [true]
   */
  actio_success: boolean;
}
