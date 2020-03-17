import React from "react";

import { withRouter } from "react-router-dom";

import List from "../../Common/List/List";

import "./BlogPostSyncApps.scss";

function BlogPostSyncApps() {
  return (
    <div className="blog-post-sync-apps">
      <List
        items={[
          "Relying on the internal clock of the device, and just periodically reading from it (in theory, this should be enough)",
          "Pinging a server every second to get the time",
          "Broadcasting server time every second via websockets",
          "Combining the first 2: syncing the time every minute, and using the internal clock in-between requests"
        ]}
        icon="bullseye"
      />
    </div>
  );
}

export default withRouter(BlogPostSyncApps);
