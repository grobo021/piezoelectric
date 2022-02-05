class Socials extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
		<div class="container">
			<header class="d-flex flex-wrap justify-content-end py-1 mb-2">
				<ul class="nav nav-pills">
					<li class="nav-item mx-1">
						<a href="#" class="nav-link" style="color: #ff0000"
							><i class="fab fa-youtube"></i
						></a>
					</li>
					<li class="nav-item mx-1">
						<a href="#" class="nav-link" style="color: #ff0000"
							><i class="fab fa-reddit-alien"></i
						></a>
					</li>
					<li class="nav-item mx-1">
						<a href="#" class="nav-link" style="color: #ff0000"
							><i class="fab fa-discord"></i
						></a>
					</li>
					<li class="nav-item mx-1">
						<a href="#" class="nav-link" style="color: #ff0000"
							><i class="fab fa-facebook"></i
						></a>
					</li>
					<li class="nav-item mx-1">
						<a
							href="https://github.com/grobo021/piezoelectricwebsite"
							class="nav-link"
							style="color: #ff0000"
							><i class="fab fa-github-alt"></i
						></a>
					</li>
				</ul>
			</header>
		</div>
        `;
    }
}

customElements.define("social-component", Socials);
