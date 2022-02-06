class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="page-footer font-small blue pt-4">
			<div class="container-fluid text-center text-md-left">
				<div class="row">
					<div class="col-md-6 mt-md-0 mt-3">
						<img src="../images/logo.png" height="75px" alt="Logo" />
						<p class="footerWhiteText">
							Rishab Arora and Mehar Dheer<br />
							OPG World School.
						</p>
					</div>

					<hr class="clearfix w-100 d-md-none pb-3" />

					<div class="col-md-6 mb-md-0 mb-3">
						<h5 class="text-uppercase footerWhiteText">Links</h5>

						<ul class="list-unstyled">
                        <li>
								<a href="../index.html" class="footerLinks">
									Home
								</a>
							</li>
							<li>
								<a href="../index.html#features" class="footerLinks">
									Features
								</a>
							</li>
							<li>
								<a href="../index.html#application" class="footerLinks">
									Area of Application
								</a>
							</li>
							<li>
								<a
									href="../pages/explanation.html"
									class="footerLinks"
								>
									How it Works?
								</a>
							</li>
                            <li>
								<a
									href="../pages/faq.html"
									class="footerLinks"
								>
									FAQ
								</a>
							</li>
							<li>
								<a
									href="../pages/contact.html"
									class="footerLinks"
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="footerCopyright text-center py-3">
				<p id="copyright" style="text-align: center"></p>
			</div>
		</footer>
        `;
    }
}

customElements.define('footer-component', Footer);
