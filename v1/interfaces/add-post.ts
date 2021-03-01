export interface outputSchema {
  /**
   * @examples [123456]
   */
  id: number;
  /**
   * @examples ["post!"]
   */
  title: string;
  /**
   * @examples ["New details!"]
   */
  details: string;
  /**
   * @examples [123456]
   */
  author_id: number;
  /**
   * @examples [0]
   */
  vote_sum: number;
  /**
   * @examples [0]
   */
  vote_count: number;
  /**
   * @examples [0]
   */
  comment_count: number;
  /**
   * @examples [123]
   */
  follower_count: number;
  /**
   * @examples [123456]
   */
  topic_id: number;
  /**
   * @examples ["https://support.zendesk.com/hc/en-us/community/posts/12608743710-Posts-"]
   */
  html_url: string;
  /**
   * @examples ["2021-03-01T07:06:23Z"]
   */
  created_at: string;
  /**
   * @examples ["2021-03-01T07:06:23Z"]
   */
  updated_at: string;
  /**
   * @examples ["https://support.zendesk.com/hc/en-us/community/posts/12608743710-Posts.json"]
   */
  url: string;
  /**
   * @examples [true]
   */
  featured: boolean;
  /**
   * @examples [true]
   */
  pinned: boolean;
  /**
   * @examples [false]
   */
  closed: boolean;
  /**
   * @examples ["none"]
   */
  status: string;
  /**
   * @examples [true]
   */
  action_success: boolean;
}
