<script>
export default {
    name: "Footer",
    data() {
        return {

        }
    },
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <ul>
                    <li class="nav-item orangetext">
					<a class="nav-link myA" href="http://127.0.0.1:8000/" target="_blank">
						Lavora con noi
					</a>
				</li>

                <li>
								<router-link to="/about">
									Chi siamo
								</router-link>
							</li>
                </ul>
            </div>
            <p>Copyright ©2024 - Team <strong>4</strong> Classe <strong>109</strong>. All rights reserved.

                Progetto finale di Boolean sviluppato da <strong>Pasquale Iannace</strong>, <strong>Francesca
                    Picoco</strong>, <strong>Thomas Salvaterra</strong>, <strong>Muhammad Israr</strong>, <strong>Abdullah
                    Azza</strong>.</p>
        </div>
    </footer>
</template>

<style scoped></style>