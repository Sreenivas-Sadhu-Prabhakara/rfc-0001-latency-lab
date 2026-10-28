document.querySelector('#share').addEventListener('click', async () => {
  const text = "Latency Lab \u2014 Explore how local feedback can make a distant computer feel responsive. Try this free interactive RFC 1 lab: https://sreenivas-sadhu-prabhakara.github.io/rfc-0001-latency-lab/";
  try { await navigator.clipboard.writeText(text); document.querySelector('#share-status').textContent='Copied. Ready to share wherever you choose.'; }
  catch { document.querySelector('#share-status').textContent=text; }
});
