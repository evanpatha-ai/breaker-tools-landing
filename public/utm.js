/* Attribution capture. The app lives on a different origin (app.breakertools.pro),
   so localStorage can't cross over — UTM params have to ride the URL onto every
   "start trial" and calculator link. First-touch wins: the original source is
   stashed and reused even after the visitor browses around the marketing site. */
(function () {
  var KEY = 'btp_utm';
  var FIELDS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  var params = new URLSearchParams(location.search);

  var stored = {};
  try { stored = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}

  var current = {};
  FIELDS.forEach(function (f) { var v = params.get(f); if (v) current[f] = v; });

  // First-touch: only stash if we don't already have a source recorded.
  var utm = stored;
  if (!Object.keys(stored).length && Object.keys(current).length) {
    try { localStorage.setItem(KEY, JSON.stringify(current)); } catch (e) {}
    utm = current;
  }

  function decorate() {
    var ref = document.referrer || '';
    var hasUtm = Object.keys(utm).length > 0;
    if (!hasUtm && !ref) return;
    var links = document.querySelectorAll(
      'a[href*="/api/start-trial"], a[href*="app.breakertools.pro/calculator"]'
    );
    links.forEach(function (a) {
      try {
        var u = new URL(a.href);
        ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function (k) {
          if (utm[k] && !u.searchParams.has(k)) u.searchParams.set(k, utm[k]);
        });
        if (ref && !u.searchParams.has('ref')) u.searchParams.set('ref', ref);
        a.href = u.toString();
      } catch (e) {}
    });
  }

  if (document.readyState !== 'loading') decorate();
  else document.addEventListener('DOMContentLoaded', decorate);
})();
