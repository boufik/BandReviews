My review on my favourite bands. The code is somewhat modular and reproducable. To play with the `HTML`, `CSS` and `JS` files, you can locally download the repo, navigate to this folder (`BandReviews`) and open a terminal from this location.

Then in Windows or Linux, you can run `python -m http.server` to run a `SimpleHTTPServer` on port 8000. The server will serve this folder and its contents. Then, you can safely, open a browser and write `http://localhost:8000`. At this URL, the `index.html` will appear. The `HTML` content will not be visible by just manually clicking the `index.html` file from your filesystem, since the HTML content is loaded dynamically with JavaScript. So, the approach is:
* Run `python -m http.server` from the `BandsReview` directory.
* Write `http://localhost:8000` for local running and experimentation.
