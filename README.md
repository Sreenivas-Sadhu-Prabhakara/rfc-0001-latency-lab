# Latency Lab

Compare immediate local text feedback with a simulated remote echo, and calculate a deliberately sequential round-trip budget.

**[Open the interactive utility](https://sreenivas-sadhu-prabhakara.github.io/rfc-0001-latency-lab/)** · [RFC 1](https://www.rfc-editor.org/rfc/rfc1.txt) · [Official status and errata](https://www.rfc-editor.org/info/rfc1)

## Community benefit

Explore how local feedback can make a distant computer feel responsive. Intended audience: Teachers, web designers and people using slow connections.

## Run locally

Serve this folder with `python3 -m http.server 8000`, then open http://localhost:8000.
The site has no build step or runtime dependencies. Inputs remain in the browser.
Run meaningful behavioral tests with `node --test` (Node 22 or later).

## Evidence and limitations

Basis: RFC 1, II: Deep Use; III: Closer Interaction.

User-chosen RTT; no live network measurement. Character count is a simplified proxy for keystrokes. Serial timing estimate excludes pipelining and server processing.

Legacy proposal, not a current Internet standard. This independent educational project is not affiliated with the IETF or RFC Editor.

## Publish

GitHub Pages serves `main` at `/`; assets use relative URLs. `.nojekyll` disables Jekyll processing.
See [PROMOTION.md](PROMOTION.md) for a classroom activity and sharing copy.
Original project code is MIT licensed; referenced RFCs retain their respective notices.

## Optional cloud CI

Tests run locally before publication. `ci/test.yml` is an inactive Actions template; activating it under `.github/workflows/` requires a GitHub credential with workflow permission.
