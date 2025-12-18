import React from &#39;react&#39;;
import { BrowserRouter, Routes, Route, Link } from &#39;react-router-dom&#39;;
import Home from &#39;./pages/Home&#39;;
import About from &#39;./pages/About&#39;;
import Contact from &#39;./pages/Contact&#39;;
import &#39;./App.css&#39;;
function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;div className=&quot;App&quot;&gt;
        &lt;nav&gt;
          &lt;ul&gt;

            &lt;li&gt;
              &lt;Link to=&quot;/&quot;&gt;Home&lt;/Link&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;Link to=&quot;/about&quot;&gt;About&lt;/Link&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;Link to=&quot;/contact&quot;&gt;Contact&lt;/Link&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/nav&gt;
        &lt;main&gt;
          &lt;Routes&gt;
            &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;
            &lt;Route path=&quot;/about&quot; element={&lt;About /&gt;} /&gt;
            &lt;Route path=&quot;/contact&quot; element={&lt;Contact /&gt;} /&gt;
          &lt;/Routes&gt;
        &lt;/main&gt;
      &lt;/div&gt;
    &lt;/BrowserRouter&gt;
  );
}