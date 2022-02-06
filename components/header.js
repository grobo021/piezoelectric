class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<div>
					<a class="navbar-brand" href="#"
						><img src="../images/logo.png" height="75px" alt="Logo"
					/></a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
				</div>
				<div>
					<div
						class="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a
									class="nav-link"
									aria-current="page"
									href="../index.html#"
									>Home</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="../index.html#features"
									>Features</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="../index.html#application"
									>Area of Application</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="../pages/explanation.html"
									>How it works?</a
								>
							</li>
                            <li class="nav-item">
								<a
									class="nav-link"
									href="../pages/faq.html"
									>FAQ</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="../pages/contact.html"
									>Contact Us</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
        `;
    }
}

customElements.define('header-component', Header);
