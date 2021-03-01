export interface outputSchema {
  ticket: {
    /**
     * @examples ["https://abcd.zendesk.com/api/v2/tickets/4.json"]
     */
    url: string;
    /**
     * @examples [123456]
     */
    id: number;
    /**
     * @examples ["2021-02-26T04:39:47Z"]
     */
    created_at: string;
    /**
     * @examples ["2021-02-26T04:39:47Z"]
     */
    updated_at: string;
    /**
     * @examples ["Comment"]
     */
    type: string;
    /**
     * @examples ["New Ticket"]
     */
    subject: string;
    /**
     * @examples ["New Ticket"]
     */
    raw_subject: string;
    /**
     * @examples ["This is the first ticket"]
     */
    description: string;
    /**
     * @examples ["normal"]
     */
    priority: string;
    /**
     * @examples ["open"]
     */
    status: string;
    /**
     * @examples ["null"]
     */
    recipient: string;
    /**
     * @examples [123456]
     */
    requester_id: number;
    /**
     * @examples [123456]
     */
    submitter_id: number;
    /**
     * @examples [123456]
     */
    assignee_id: number;
    /**
     * @examples [123456]
     */
    organization_id: number;
    /**
     * @examples [123456]
     */
    group_id: number;
    /**
     * @examples [false]
     */
    has_incidents: boolean;
    /**
     * @examples [false]
     */
    is_public: boolean;
    /**
     * @examples ["null"]
     */
    due_at: string;
    /**
     * @examples [123456]
     */
    brand_id: number;
    /**
     * @examples [false]
     */
    allow_channelback: boolean;
    /**
     * @examples [false]
     */
    allow_attachments: boolean;
  };
  audit: {
    /**
     * @examples [123456]
     */
    id: number;
    /**
     * @examples [16]
     */
    ticket_id: number;
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
       * @examples ["The smoke is very colorful"]
       */
      html_body: string;
      /**
       * @examples ["The smoke is very colorful"]
       */
      plain_body: string;
      /**
       * @examples [true]
       */
      public: boolean;
      /**
       * @examples [123456]
       */
      audit_id: number;
    }[];
    via: {
      /**
       * @examples ["api"]
       */
      channel: string;
      source: {
        from: {
          /**
           * @examples ["John"]
           */
          name: string;
          /**
           * @examples ["john@company.com"]
           */
          address: string;
        };
        to: {
          /**
           * @examples ["Smith"]
           */
          name: string;
          /**
           * @examples ["smith@company.com"]
           */
          address: string;
        };
        /**
         * @examples ["null"]
         */
        rel: string;
      };
    };
  };
  /**
   * @examples [true]
   */
  action_success: boolean;
}
