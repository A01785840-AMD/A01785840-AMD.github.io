import Aether, { html } from "@aether/Aether.js";


export default function SimpleWebPage() {
    return new Aether.Component(html`
        <style>
            :host {
                background: white;
                color: black;
                min-height: 100dvh;
                display: flex;
                flex-direction: column;
            }

            :host a {
                color: white;

                &:hover {
                    cursor: pointer;
                    color: orange;
                }
            }

            :host nav {
                position: sticky;
                top: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 1rem;
                max-height: 70px;
                background: seagreen;
                color: white;
                z-index: 10;
            }

            :host nav ul {
                display: flex;
                list-style: none;
                gap: 0.5rem;
            }

            :host header {
                display: flex;
                align-items: center;
                
                flex-direction: column;
                padding: 2rem 1rem;
                min-height: 200px;
                color: white;
                background: orange;
            }

            :host header h1 {
                font-size: clamp(1.8rem, 5vw, 3.5rem);
                text-align: center;
            }

            :host header p {
                max-width: 90%;
                text-align: justify;
                margin: 0 auto;
                padding: 0.5rem;
            }

            :host main section {
                display: flex;
                align-items: center;
                justify-content: center;
                
                flex-wrap: wrap;
                gap: 1rem;
                padding: 1.5rem 0.75rem;
            }

            :host .callToAction {
                gap: 1.5rem;
                padding: 1.5rem 1rem;
                color: white;
                background: seagreen;
            }

            :host .callToAction form {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.75rem;
                width: 100%;
                max-width: 500px;
            }

            :host .callToAction form input {
                background: white;
                color: black;
                border: 1px solid #ccc;
                border-radius: 4px;
                padding: 0.5rem 1rem;
                font: inherit;
                outline: none;
                width: 100%;
            }

            :host .callToAction form input[type="submit"] {
                background: orange;
                color: white;
                font-weight: bold;
                cursor: pointer;
                border: none;
                transition: background-color 0.3s;
            }

            :host .callToAction form input[type="submit"]:hover {
                background: #207043;
            }

            :host .cards {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1rem;
                padding: 1rem;
            }

            :host .card {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex: 1 1 280px;
                min-width: 280px;
                max-width: 400px;
                padding: 1rem;
                text-align: center;
                margin: 0.5rem;
            }

            :host footer {
                display: flex;
                justify-content: center;
                padding: 1rem 0;
                color: white;
                background: seagreen;
                width: 100%;
                margin-top: auto;
            }

            @media (min-width: 768px) {
                :host nav {
                    padding: 0 2rem;
                }

                :host nav ul {
                    gap: 1rem;
                }

                :host header {
                    padding: 3rem 1rem;
                    min-height: 250px;
                }

                :host header p {
                    max-width: 1000px;
                    padding: 0;
                }

                :host .callToAction form {
                    flex-direction: row;
                    flex-wrap: nowrap;
                }

                :host .callToAction form input {
                    width: auto;
                }

                :host .callToAction form input[type="email"] {
                    min-width: 250px;
                    flex: 1;
                }

                :host .card {
                    padding: 1.5rem;
                }

                :host .cards {
                    padding: 2rem;
                }
            }
        </style>
        <div>
            <nav>
                <h2>Simple web page</h2>
                <ul>
                    <li>
                        <a>Content</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Contact Us</a>
                    </li>
                </ul>
            </nav>
            <header>
                <h1>Web development course!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci dolor eos est fuga
                   laboriosam minus necessitatibus, perspiciatis qui quia quibusdam quisquam quod rem tempora totam
                   ullam voluptatibus. Reiciendis, soluta?</p>
            </header>
            <main>
                <section class="callToAction">
                    <h3>Suscribe to the newsletter</h3>
                    <form>
                        <label>
                            <input type="email" placeholder="Enter your email"/>
                        </label>
                        <input type="submit" value="SUBSCRIBE"/>
                    </form>
                </section>
                <section class="cards">
                    <div class="card">
                        <h3>HTML</h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                             alt="HTML Logo" width="80" height="80"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam at, commodi consequuntur
                           dicta dolore dolorum fugiat in laborum magnam obcaecati</p>
                    </div>
                    <div class="card">
                        <h3>CSS</h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                             alt="CSS Logo" width="80" height="80"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam at, commodi consequuntur
                           dicta dolore dolorum fugiat in laborum magnam obcaecati</p>
                    </div>
                    <div class="card">
                        <h3>JS</h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                             alt="JS Logo" width="80" height="80"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam at, commodi consequuntur
                           dicta dolore dolorum fugiat in laborum magnam obcaecati</p>
                    </div>
                </section>
            </main>
            <footer>
                <p>TC2005B Copyright &copy; 2021</p>
            </footer>
        </div>
    `);
}