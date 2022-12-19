<template>
    <body class="container">
        <hr class="opacity-100 m-0" />

        <p class="lead text-center py-1 my-1">My Portfolio (-11% daily):</p>
        <section class="px-4 py-5 my-5">
            <span class="row align-content-center">
                <span class="col">
                    <canvas
                        id="portfolioChart"
                        style="width: 450px; max-width: 450px; height: 450px; max-height: 450px"
                    ></canvas>
                </span>

                <span class="d-flex col justify-content-center">
                    <div class="card" style="width: 30rem">
                        <div class="card-header">Stocks&Crypto for @<span id="username"></span></div>
                        <ul id="listPortfolio" class="list-group">
                            <span class="text-center m-5">loading...</span>
                        </ul>
                    </div>
                </span>
            </span>
        </section>

        <hr class="opacity-100 m-0" />
    </body>
</template>

<script>
export default {
    name: "PortfolioPage",
};
</script>
