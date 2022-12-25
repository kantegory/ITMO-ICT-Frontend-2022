<template>
    <section class="p-5">
        <h1>Your saved cities</h1>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col-md">
                    <div class="card">
                        <div class="card-body text-justify">
                            <h5><i class="bi bi-geo-alt"> Saint-Petersburg</i></h5>
                            <h5><i class="bi bi-thermometer-low">+5°C</i></h5>
                            <h5><i class="bi bi-cloud-drizzle"> Drizzle</i></h5>
                        </div>
                      </div>
                </div>
                <div class="col-md">
                    <div class="card">
                        <div class="card-body text-justify">
                            <h5><i class="bi bi-geo-alt"> Paris</i></h5>
                            <h5><i class="bi bi-thermometer-half"> +14°C</i></h5>
                            <h5><i class="bi bi-cloud-rain-heavy"> Heavy rain</i></h5>
                        </div>
                      </div>
                </div>
                <div class="col-md">
                    <div class="card">
                        <div class="card-body text-justify">
                            <h5><i class="bi bi-geo-alt"> Athens</i></h5>
                            <h5><i class="bi bi-thermometer-high">+22°C</i></h5>
                            <h5><i class="bi bi-sun"> Sunny</i></h5>
                        </div>
                      </div>
                </div>
                <div class="col-md">
                    <div class="card">
                        <div class="card-body text-justify">
                            <h5><i class="bi bi-geo-alt"> Los Angeles</i></h5>
                            <h5><i class="bi bi-thermometer-high">+32°C</i></h5>
                            <h5><i class="bi bi-cloud-sun"> Partly cloudy</i></h5>
                        </div>
                      </div>
                </div>
                <div class="col-md">
                    <div class="card">
                        <div class="card-body text-justify">
                            <h5><i class="bi bi-geo-alt"> Abu-Dhabi</i></h5>
                            <h5><i class="bi bi-thermometer-high">+38°C</i></h5>
                            <h5><i class="bi bi-sun"> Sunny</i></h5>
                        </div>
                      </div>
                </div>
                <div class="col-md">
                    <div class="card">
                        <div class="card-body text-justify">
                            <h5><i class="bi bi-geo-alt"> Tokyo</i></h5>
                            <h5><i class="bi bi-thermometer-half">+17°C</i></h5>
                            <h5><i class="bi bi-cloud-lightning-rain"> Rain with lightning</i></h5>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Acc'
}
</script>

<style>
h5 i {
    color:black;
}
</style>
