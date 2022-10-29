import Layout from "@components/Layout";
import React from "react";

export default function Forty() {
  return (
    <Layout>
      <h1 id="forty-days">Forty days</h1>
      <h2 id="_controll-your-habits_">
        <em>controll your habits</em>
      </h2>
      <p>
        40Days is a desktop application that helps user adopt new healthy habits
        and get rid of unhealthy ones 🔥
      </p>
      <ul>
        <li>
          ⏲️ Create a spell of tracking your behaviours. Spell&#39;s length is
          40 days
        </li>
        <li>📓 Create activitys that you want to track</li>
        <li>🔁 Repeat an activity/action for forty days</li>
        <li>
          ❌ Activity can be also negative e.g &quot;not to procrastinate&quot;
        </li>
        <li>🎉 After 40 days, a new &quot;YOU&quot; is born</li>
        <li>
          😎 Create even more spells and activities untill you become the best
          version of yourself
        </li>
      </ul>
      <h2 id="_why-forty-days_">
        <em>Why forty days</em>
      </h2>
      <p>
        If you repeat an activity for forty days continously, that activity
        becomes part of your habits. For example, if you were too lazy to
        exercise before, once you exercise forty days back to back, after that
        period, it is one of your habits. The key is here consistency.
      </p>
      <h3>Get the app</h3>
      <p>
        Windows:{" "}
        <a href="/40days-setup-v_1.exe" download={true} target="_blank">
          40days.exe
        </a>
      </p>
      <p>
        Mac Os: <i>Coming soon</i>
      </p>
      <p>
        Linux: <i>Coming soon</i>
      </p>
    </Layout>
  );
}
