import React from "react";

import { withRouter } from "react-router-dom";

import List from "../../Common/List/List";

import FeaturedImagePath from "../../assets/godragons-app-sync.jpg";

import CoverImage from "../../Common/CoverImage/CoverImage";
import BoxedLayout from "../../Common/BoxedLayout/BoxedLayout";
import Separator from "../../Common/Separator/Separator";

import "./BlogPostSyncApps.scss";

function BlogPostSyncApps() {
  return (
    <div className="blog-post-sync-apps">
      <BoxedLayout>
        <CoverImage
          path={FeaturedImagePath}
          title="Keeping apps in sync…"
          subtitle="How hard can it be?"
        />
        <p>
          At first glance, the following situation should be easy to achieve:
          <b className="highlight">
            given a few devices running an app which displays a timer, make sure
            that they stay synchronised within less than 100 milliseconds.
          </b>
          This is a challenge most businesses using commercial, multi-screen
          displays are familiar with. It’s also a situation every online game or
          streaming service encounters, but in those scenarios, if the internet
          connection falters, users intuitively expect their experience to
          degrade.
          <b className="highlight">
            For our purposes, that is not acceptable.{" "}
          </b>
          As it turns out, doing this in real life is slightly tricky under the
          best of circumstances, and downright painful when the internet
          connection is unreliable.
        </p>
        <p>
          For all of the scenarios below, we need a server that’s close enough
          for network latency not to be a significant issue (this is easily
          achieved worldwide with any major cloud provider, by deploying to
          multiple regions
        </p>
        <Separator />

        <h3>Theoretically, we have a number of options:</h3>
        <br />
        <List
          items={[
            "Relying on the internal clock of the device, and just periodically reading from it (in theory, this should be enough)",
            "Pinging a server every second to get the time",
            "Broadcasting server time every second via websockets",
            "Combining the first 2: syncing the time every minute, and using the internal clock in-between requests <b class='highlight'>(spoiler alert: this is it)</b>"
          ]}
          icon="bullseye"
          rich={true}
        />
        <br />
        <p>
          The problems start when the internet connection suddenly drops off.
          What happens then? Since we cannot rely on the server’s time anymore,
          we need to use the device’s internal clock, hoping it won’t stray too
          far from truth. But achieving this transition seamlessly, while also
          re-syncing with the server as soon as possible, is an interesting
          challenge. Next we will analyse each of the options, look at their
          benefits and drawbacks, and see if can make them work well even when
          the internet connection is flaky.
        </p>
        <br />
        <br />
        <h3>
          1) Relying on the internal clock of the device, and just periodically
          reading from it
        </h3>

        <p>
          If we could rely on a device’s internal clock to always be up to date,
          none of this would be needed, we could just treat that as{" "}
          <b className="highlight">the</b> time. However, in real life, the
          internal clocks of different devices can easily vary by a few{" "}
          <b className="highlight">seconds!</b> That margin of error is
          literally dozens of times larger than what we can afford. To
          understand how that happens, we should first look at how a computer
          gets its time in the first place.
        </p>

        <p>
          First of all, let’s look at the hardware: most desktop and laptop
          computers have a sort of digital clock inside them, ticking away even
          when the device is powered off. To achieve that, they have a battery
          that’s dedicated to that clock. This makes these devices quite
          accurate at maintaining time. On the other hand, computers like the
          Raspberry Pi, or even most Intel NUCs (Next Unit of Computing) don’t
          have that battery, and consequently cannot keep time when they are
          powered off. This means that every time you turn them on, they need to
          be told what time it is (this is done automatically, but it happens at
          every start-up).
        </p>

        <p>
          Regardless of whether the computer has a dedicated clock with a
          battery or not, they all need to get their time from somewhere, at
          least once. This means either the user sets the time manually, or a
          time server is used. Each operating system (Windows, Mac OS, Linux)
          has different time servers, placed at various distances from the
          device in question, and they interact with these servers at various
          amounts of time.
        </p>

        <p>
          We can indeed deploy and use our own time servers (although that’s not
          very simple), we can set the frequency at which the system updates its
          time, but given that this is such a critical part of the system, we do
          not have full freedom to manipulate its processes.{" "}
          <b className="highlight">
            What all this means in practice is that system time can vary, and
            there isn’t that much we can do about it.
          </b>
        </p>

        <br />
        <br />
        <h3>2) Pinging a server every second to get the time</h3>

        <p>
          To avoid relying on the internal clock of the system, we can just ping
          the server every second, asking for the time. This approach is rife
          with potential problems:
        </p>

        <List
          items={[
            "The request takes different amounts of time to finish depending on the device and network conditions, which means that the browsers cannot be fully synchronised",
            "If a request takes longer than a second to get a response, when it actually does come back, it will seem as if time is “flowing backwards”. This can of course be mitigated by always cancelling old requests as soon as a new one is made. (In practice, you cannot cancel a request per se, which means you usually need to assign an ID to which, and keep track of which one is the last ID issued, and just ignore its response)",
            "if the computer is already stretched to its limit (which is the case with many commercial display situations), having so many requests will exacerbate the problem, thus throwing the whole app out of sync even more, because now the CPU is queing up operations, instead of executing them immediately"
          ]}
          icon="times"
        />
        <br />
        <br />
        <h3>3) Broadcasting server time every second via websockets</h3>

        <p>
          Once we’ve established our two-way communication between client and
          server, we can just make our server periodically broadcast its own
          time, say every second. All of a sudden, we lose internet connection
          for one of our devices, or it slows down drastically. Since it relies
          on the server to give it the time every second, if the connection is
          down for longer than that, that browser will become out of sync, which
          means we need to catch connection dropouts or slowdowns.
        </p>
        <p>
          A way to detect network problems is to periodically check how long has
          passed since the last broadcast received from the server. As soon as
          that amount goes over one second, we switch to our backup: the
          device’s clock. That is, we replace the last value from the server
          with our current system time, and the rest of the app should treat
          that as the truth. As soon as the server sends us a new message, we
          use that time, and we’re back to normal.
        </p>
        <p>
          While this approach works reasonably well, we are very reliant on very
          close to 100% uptime for the server. If the connection to the server
          is lost by a few (or all) devices, when they reconnect, they are not
          guaranteed to do so at exactly the same time, so when the new
          broadcast comes in, some will have received the message, and some not,
          which can lead to a glitch.
        </p>

        <br />
        <br />
        <h3>
          4) Combining the first two: syncing the time every minute, and using
          the internal clock in-between requests{" "}
          <b className="highlight">(spoiler alert: this is it)</b>
        </h3>

        <p>
          We’ve already established that it’s not optimal to rely on time being
          syncronised every second, for various reasons. That means time sync
          events have to happen further apart (a minute is more reasonable),
          which begs the question: what do we do in the meantime?
        </p>
        <p>
          Overall, computers are pretty good at knowing how long a second lasts.
          After all, that’s how your processor knows how to run at exactly say
          3GHz (which is 3 billion computer cycles every second). That means our
          process can be as follows:
        </p>

        <List
          items={[
            "Start by setting up a periodic request to get the server’s time accurate to the millisecond, and make this run every minute. If the request fails, just ignore it and wait for the next one.",
            "When we get a response back, use that time as the new true time.",
            "Every time the server responds, we set up a bit of logic that runs every second and increments our current time. (remember, we’re not relying on the system time anymore, and the server only provides it every minute)",
            '<p><b class="highlight">The critical part is here: if we just start that self-repeating logic of incrementing the time every second right after we get the response, it will always be out of sync, because the request hits the server at different times *within* the second. So what we need to do is first wait the rest of the second, and start the repeating logic at the beginning of the next second.</b> If the server tells us that the time is <b class="highlight">13:05:25.300</b>, it means we have to wait another 700 milliseconds, and then start the repeating cycle.</p>'
          ]}
          rich={true}
          icon="check-circle"
        />
        <br />
        <p>
          At this point, you might say{" "}
          <b className="highlight">
            “if computers are so good at keeping time once they have a
            benchmark, why do we need to re-sync so often?”
          </b>
          . And you’d be right, we don’t need to do it every minute. It can be
          every 30 minutes or every hour, but if our app potentially runs 24/7,
          we do need to re-sync eventually. The reason is that in client apps
          (mainly ones running JavaScript), repeating an action exactly at the
          same interval of time is not very exact. For example, JavaScript being
          single-threaded, if anything gets the main CPU thread to 100% load,
          that will delay the timer, and these delays add up. There are other
          potential obstacles, like the browser (or the chosen runtime) runs
          garbage collection, or just decides it needs resources redirected
          somewhere else for a little while. Add that to the fact that we can
          never control what the operating system does underneath (like when it
          decides to check for updates, fetch mail, run antivirus scans and the
          like), we cannot be sure nothing ever gets in the way of our timer
          firing precisely when we want it. Therefore, to protect ourselves from
          that, we can just run the synchronisation process every so often.
        </p>

        <p>
          As time goes by, instead of re-syncing with the server, we try and
          compare our offset with the operating system’s time (the internal
          clock may be wrong, but at least it should be wrong consistently). The
          problem with that is this: the OS can sync its own time whenever it
          decides to, and this can make it jump by a few seconds at a time. That
          time difference showing up seemingly out of the blue would wreak havoc
          on any attempts to reconcile the application time with the system
          time.
        </p>

        <br />
        <br />
        <h3>
          We could also use off-the-shelf solutions that could be installed on
          the machines, which would do this for us, right?
        </h3>
        <p>
          <b>Yes and no.</b> For one thing, installing anything on the devices
          themselves requires maintenance specific to the type of the device. It
          also makes this harder to scale, complicating the installation
          process. Lastly, it may not work under all network conditions,
          depending on static/dynamic IP of the devices, and specific traffic
          rules for each network. These may be non-issues in other situations of
          course, but for the purposes outlined at the top of this article,
          taking care of synchronisation at the application level, rather than
          at the system level, means our solution is more portable and more
          maintainable.
        </p>

        <br />
        <br />
        <br />
      </BoxedLayout>
    </div>
  );
}

export default withRouter(BlogPostSyncApps);
